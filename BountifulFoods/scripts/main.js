// This function does several things. It displays copyright, year, name,
// my name, class and when the page was last updated, all in one line at the bottom of the footer.
function displayFooter() {
  const copyrightSymbol = "\u00A9";
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let footerElement = document.querySelector("#footer");
  footerElement.textContent =
    copyrightSymbol +
    currentYear +
    " Bountiful Foods | Blake K. Torres | WDD 230 Project | Last Updated: " +
    document.lastModified;
}

// Get the current date
function getCurrentDate() {
  let curDate = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let formattedDate = curDate.toLocaleDateString(undefined, options);
  let formattedTime = curDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
  });
  let dateTime = formattedDate + " " + formattedTime;
  let dateElement = document.querySelector("#date");
  dateElement.textContent = dateTime;

  // Update the time every second
  setInterval(function () {
    curDate = new Date();
    formattedTime = curDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    });
    dateTime = formattedDate + " " + formattedTime;
    dateElement.textContent = dateTime;
  }, 1000);
}

// Hamburger Menu
function toggleMenu() {
  document.getElementsByClassName("nav-ul")[0].classList.toggle("responsive");
}

// Lazy Loading
const placeholderImages = document.querySelectorAll(".placeholder");

function loadImage(entry) {
  const imgElement = entry.target;
  const newImage = new Image();
  newImage.src = imgElement.getAttribute("data-src");

  newImage.addEventListener("load", function () {
    imgElement.src = newImage.src;
  });
}

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      loadImage(entry);
      observer.unobserve(entry.target);
    }
  });
});

placeholderImages.forEach(function (image) {
  observer.observe(image);
});


displayFooter();
getCurrentDate();
toggleMenu();
