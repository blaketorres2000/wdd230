function dateTimeUpdated () {
    let dateTimeElement = document.querySelector('dateTimeUpdate');
    let currentDate = new Date();
    let dateTimeString = currentDate.toLocaleString();
    dateTimeElement.textContent = dateTimeString
}

setInterval(dateTimeUpdated,1000);