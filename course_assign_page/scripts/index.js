// This function is to update the date and time for the last
// time the site was updated.
function updateDateTime() {
    var lastUpdated = document.querySelector('datetime');
    var modifiedDate = new Date(document.lastModified);
    var formatDate = modifiedDate.toLocaleString();
    lastUpdated.textContent = 'Last updated: ' + formatDate; 
}

updateDateTime()