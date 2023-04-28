
function updateDateTime() {
    var datetimeElement = document.getElementById("datetime");
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();
    datetimeElement.textContent = dateTimeString;
}
