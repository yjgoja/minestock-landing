/**
 * Google Apps Script - 스프레드시트 연동용
 *
 * 사용 방법:
 * 1. Google 스프레드시트를 새로 만들거나 기존 시트를 엽니다
 * 2. 확장 프로그램 > Apps Script 메뉴를 엽니다
 * 3. 아래 코드를 붙여넣고 저장합니다
 * 4. 배포 > 새 배포 > 유형: 웹 앱
 *    - 실행: 나
 *    - 액세스: 모든 사용자
 * 5. 배포 URL을 Vercel 환경변수 GOOGLE_SCRIPT_URL에 설정합니다
 *
 * 시트1 (메인/구글애즈): A~G 헤더
 * 시트2 (메타/01): A~G 헤더 동일
 * A: 접수일시 | B: 투자경험 | C: 이름 | D: 전화번호 | E: 개인정보동의 | F: 마케팅동의 | G: 유입경로
 */

function doPost(e) {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    var sheetNumber = data.sheetNumber || (data.source === "01" ? 2 : 1);
    var sheets = spreadsheet.getSheets();

    if (sheetNumber < 1 || sheetNumber > sheets.length) {
      throw new Error("시트 번호가 올바르지 않습니다: " + sheetNumber);
    }

    var sheet = sheets[sheetNumber - 1];

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
      data.experience || "",
      data.name || "",
      data.phone || "",
      data.consentPrivacy || "",
      data.consentMarketing || "",
      data.source || "main",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
