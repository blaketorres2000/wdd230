// This function does several things. It displays copyright, year, name, 
// my name, class and when the page was last updated, all in one line at the bottom of the footer.
function displayFooter() {
    const copyrightSymbol = '\u00A9';
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let footerElement = document.querySelector('#footer');
    footerElement.textContent = copyrightSymbol + currentYear + ' Fred Chamber | Blake K. Torres | WDD 230 Project | Last Updated: ' + document.lastModified;
  }
