// This function is to update the date and time for the last
// time the site was updated.
var lastUpdated = document.querySelector('datetime');
let oLastModif = new Date(document.lastModified);    
lastUpdated.textContent = 'Last updated: ' + oLastModif; 
