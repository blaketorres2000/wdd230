// This function is to display the copyright symbol,
// current date, name, and state.
function copyName() {
    const copyrightSymbol = '\u00A9';
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let year = document.querySelector('#footerName');
    year.textContent = copyrightSymbol + currentYear + ' Fred Chamber | Blake K. Torres | WDD 230 Project | ';
}

// This function is to update the date and time for the last
// time the site was updated.
function updateDateTime() {
    let dateUpdate = document.lastModified;
    let datetimeElement = document.querySelector('#datetime');
    datetimeElement.textContent = 'Last Updated: ' + dateUpdate;
}

copyName() + updateDateTime();
