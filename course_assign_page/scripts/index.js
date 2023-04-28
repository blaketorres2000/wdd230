// function dateTimeUpdated () {
//     let dateTimeElement = document.querySelector('dateTime');
//     let currentDate = new Date();
//     let dateTimeString = currentDate.toLocaleString();
//     dateTimeElement.textContent = dateTimeString;
// }

// setInterval(dateTimeUpdated,1000);

function updateDateTime() {
    var datetimeElement = document.getElementById("datetime");
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();
    datetimeElement.textContent = dateTimeString;
}

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);