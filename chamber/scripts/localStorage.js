
const msToDays = 86400000;
const theDateToday = new Date();
const lastVisit = new Date(localStorage.getItem("lastVisit-ls"));
const timeDiff = theDateToday - lastVisit;
const daysPassed = Math.floor(timeDiff / msToDays);
localStorage.setItem("lastVisit-ls", theDateToday);

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
document.querySelector(".days").textContent = "It has been " + daysPassed + " days since your last visit.";
} else {
document.querySelector(".days").textContent = "This is your first visit. Welcome!";
}

