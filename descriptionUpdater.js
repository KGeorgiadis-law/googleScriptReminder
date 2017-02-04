  var spreadSheet = SpreadsheetApp.openById('xxx');
  var sheet = spreadSheet.getSheetByName('Sheet1');
  var amountSetOff = sheet.getRange("H29").getValue();

function descrUpdater() {
  var form = FormApp.openById('xxx');
  var time = Utilities.formatDate(new Date(), "GMT", "HH:mm ");
  form.setConfirmationMessage("Thank you for using me! At "+time+" today, the current position was: "+amountSetOff+".");
}
