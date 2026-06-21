/**
 * Google Apps Script - 스프레드시트 연동 v2
 *
 * [중요] 코드 수정 후 반드시:
 * 배포 → 배포 관리 → 연필(수정) 또는 "새 배포" → 웹 앱 → 배포
 * (저장만 하면 URL은 같아도 예전 코드가 계속 실행됩니다)
 *
 * 시트1 (메인/구글애즈): A~G 헤더
 * 시트2 (메타/01): A~G 헤더 동일
 * A: 접수일시 | B: 투자경험 | C: 이름 | D: 전화번호 | E: 개인정보동의 | F: 마케팅동의 | G: 유입경로
 */

function getTargetSheet_(spreadsheet, data) {
  var source = String(data.source || "main");
  var isMeta = source === "01" || Number(data.sheetNumber) === 2;

  if (data.sheetName) {
    var named = spreadsheet.getSheetByName(data.sheetName);
    if (named) return named;
  }

  var preferredNames = isMeta
    ? ["시트2", "Sheet2", "메타", "Meta", "01"]
    : ["시트1", "Sheet1", "메인", "Main", "main"];

  for (var i = 0; i < preferredNames.length; i++) {
    var byName = spreadsheet.getSheetByName(preferredNames[i]);
    if (byName) return byName;
  }

  var sheetNumber = isMeta ? 2 : 1;
  var sheets = spreadsheet.getSheets();
  if (sheetNumber >= 1 && sheetNumber <= sheets.length) {
    return sheets[sheetNumber - 1];
  }

  throw new Error("저장할 시트를 찾을 수 없습니다. 시트2 탭 이름을 확인해주세요.");
}

function doPost(e) {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    var sheet = getTargetSheet_(spreadsheet, data);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
      data.experience || "",
      data.name || "",
      data.phone || "",
      data.consentPrivacy || "",
      data.consentMarketing || "",
      data.source || "main",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        sheet: sheet.getName(),
        version: 2,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var names = spreadsheet.getSheets().map(function (s) {
    return s.getName();
  });

  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", version: 2, sheets: names })
  ).setMimeType(ContentService.MimeType.JSON);
}
