const msToDays = 86400000;
const theDateToday = new Date();
const lastVisit = new Date(localStorage.getItem("lastVisit-ls"));
const timeDiff = theDateToday - lastVisit;
const daysPassed = Math.floor(timeDiff / msToDays);
localStorage.setItem("lastVisit-ls", theDateToday);

document.querySelector(".days").textContent = "It has been " + daysPassed + " day(s) since your last visit.";

