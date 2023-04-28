// This function is to update the date and time for the last
// time the site was updated.
function updateDateTime() {
    var lastUpdated = document.querySelector('datetime');
    lastUpdated.textContent = 'Last updated: ' + alert(document.lastModified); 
}

updateDateTime();