
// This function is to display the copyright symbol,
// current date, name, and state.
function copyNameState() {
    const copyrightSymbol = '\u00A9';
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let year = document.querySelector('#footerName');
    year.textContent = copyrightSymbol + '  ' + currentYear + '  .:| Blake K. Torres |:. Texas';
}

// This function is to update the date and time for the last
// time the site was updated.
function updateDateTime() {
    let currentDate = new Date();
    let date = currentDate.toDateString();
    let time = currentDate.toLocaleTimeString();
    let datetimeElement = document.querySelector('#datetime');
    datetimeElement.textContent = 'Last Updated: ' + date + '   ' + time;
}

copyNameState();
updateDateTime();
