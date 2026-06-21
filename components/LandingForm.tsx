"use client";

import { useMemo, useState } from "react";
import { trackConversion } from "@/lib/track-conversion";

type LandingFormProps = {
  source: "main" | "01";
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function LandingForm({ source }: LandingFormProps) {
  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consentPrivacy, setConsentPrivacy] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const canProceed = useMemo(() => {
    if (step === 1) return !!experience;
    if (step === 2) return !!name.trim();
    if (step === 3) return /^01[0-9]-\d{3,4}-\d{4}$/.test(phone);
    return true;
  }, [step, experience, name, phone]);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const handleNext = () => {
    setErrorMessage("");
    if (step === 1 && !experience) {
      setErrorMessage("투자 경험 여부를 선택해주세요.");
      return;
    }
    if (step === 2 && !name.trim()) {
      setErrorMessage("성함을 입력해주세요.");
      return;
    }
    if (step === 3 && !/^01[0-9]-\d{3,4}-\d{4}$/.test(phone)) {
      setErrorMessage("휴대폰 번호를 정확히 입력해주세요.");
      return;
    }
    if (step < 4) setStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    setErrorMessage("");
    if (!consentPrivacy) {
      setErrorMessage("개인정보 수집 및 이용 동의(필수)를 체크해주세요.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          experience,
          name: name.trim(),
          phone,
          consentPrivacy,
          consentMarketing,
          source,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "제출에 실패했습니다.");

      trackConversion(source);

      setStatus("success");
      setStep(1);
      setExperience("");
      setName("");
      setPhone("");
      setConsentPrivacy(false);
      setConsentMarketing(false);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "제출에 실패했습니다."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <div className="mb-4 text-5xl">✓</div>
        <h3 className="mb-2 text-xl font-bold text-[#1f66ff]">
          상담 신청이 완료되었습니다!
        </h3>
        <p className="mb-6 text-slate-400">곧 전문 상담사가 연락드리겠습니다.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-[#1f66ff] underline"
        >
          추가 신청하기
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-sm font-bold text-[#1f66ff]">STEP {step} / 4</p>
        <div className="h-2 w-40 overflow-hidden rounded-full bg-[#d9e7ff]">
          <div
            className="h-full bg-[#1f66ff] transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <h2 className="landing-question">
            1번 질문. 주식 선물투자에 경험이 있으신가요?
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setExperience("yes")}
              className={`choice-btn ${experience === "yes" ? "choice-btn-active" : ""}`}
            >
              있음
            </button>
            <button
              type="button"
              onClick={() => setExperience("no")}
              className={`choice-btn ${experience === "no" ? "choice-btn-active" : ""}`}
            >
              없음
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="landing-question">2번 질문. 성함을 입력해주세요</h2>
          <p className="landing-warning">
            허위 정보 입력시 상담 처리 제한이 있습니다.
          </p>
          <input
            type="text"
            className="form-input"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "loading"}
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="landing-question">
            3번 질문. 휴대폰 번호를 입력해주세요
          </h2>
          <p className="landing-warning">
            허위 정보 입력시 상담 처리 제한이 있습니다.
          </p>
          <input
            type="tel"
            className="form-input"
            placeholder="휴대폰번호 입력"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            disabled={status === "loading"}
          />
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h2 className="landing-question">4번 질문. 동의 안내</h2>
          <p className="text-sm leading-relaxed text-[#31527f]">
            상담 및 서비스 제공을 위해 아래 항목에 동의가 필요합니다.
          </p>
          <button
            type="button"
            className="all-agree-btn"
            onClick={() => {
              const allChecked = consentPrivacy && consentMarketing;
              setConsentPrivacy(!allChecked);
              setConsentMarketing(!allChecked);
            }}
          >
            전체동의
          </button>
          <div className="space-y-3 rounded-xl border border-[#bfd2ff] bg-[#f3f8ff] p-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consentPrivacy}
                onChange={(e) => setConsentPrivacy(e.target.checked)}
                className="mt-1 h-4 w-4 accent-[#1f66ff]"
              />
              <span className="text-sm leading-relaxed text-[#31527f]">
                개인정보 수집 및 이용동의 (필수){" "}
                <a
                  href="/agreements/privacy"
                  target="_blank"
                  className="text-[#1249bc] underline underline-offset-2"
                >
                  자세히보기
                </a>
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consentMarketing}
                onChange={(e) => setConsentMarketing(e.target.checked)}
                className="mt-1 h-4 w-4 accent-[#1f66ff]"
              />
              <span className="text-sm leading-relaxed text-[#31527f]">
                마케팅 활용 및 수신동의 (선택){" "}
                <a
                  href="/agreements/marketing"
                  target="_blank"
                  className="text-[#1249bc] underline underline-offset-2"
                >
                  자세히보기
                </a>
              </span>
            </label>
          </div>
        </div>
      )}

      {errorMessage && (
        <p className="text-center text-sm text-red-400">{errorMessage}</p>
      )}

      <div className="flex gap-3">
        {step > 1 && (
          <button
            type="button"
            className="nav-btn nav-btn-ghost"
            onClick={() => {
              setErrorMessage("");
              setStep((s) => s - 1);
            }}
          >
            이전
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            className="nav-btn nav-btn-main"
            onClick={handleNext}
            disabled={!canProceed}
          >
            다음
          </button>
        ) : (
          <button
            type="button"
            className="nav-btn nav-btn-main"
            onClick={handleSubmit}
            disabled={status === "loading"}
          >
            {status === "loading" ? "제출 중..." : "동의하고 완료"}
          </button>
        )}
      </div>
    </div>
  );
}
