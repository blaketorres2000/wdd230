// This function is to update the date and time for the last
// time the site was updated.
// let lastUpdated = document.querySelector('datetime');
// let LastModif = new Date(document.lastModified);    
// lastUpdated.textContent = 'Last updated: ' + LastModif; 

function copyNameState() {
    const copyrightSymbol = '\u00A9';
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let year = document.querySelector('#footerName');
    year.textContent = copyrightSymbol + '  ' + currentYear + '  .:| Blake K. Torres |:. Texas';
}

function updateDateTime() {
    // Create a new Date object
    let currentDate = new Date();

    // Get the date
    let date = currentDate.toDateString();

    // Get the time
    let time = currentDate.toLocaleTimeString();

    // Use querySelector to select the HTML element
    let datetimeElement = document.querySelector('#datetime');

    // Set the content of the HTML element to the date and time
    datetimeElement.textContent = 'Last Updated: ' + date + '   ' + time;
}

copyNameState();
updateDateTime();
