// This function is to update the date and time for the last
// time the site was updated.
// let lastUpdated = document.querySelector('datetime');
// let LastModif = new Date(document.lastModified);    
// lastUpdated.textContent = 'Last updated: ' + LastModif; 

// Create a new Date object
var currentDate = new Date();

// Get the date
var date = currentDate.toDateString();

// Get the time
var time = currentDate.toLocaleTimeString();

// Use querySelector to select the HTML element
var datetimeElement = document.querySelector('#datetime');

// Set the content of the HTML element to the date and time
datetimeElement.textContent = 'Last Updated: ' + date + time;