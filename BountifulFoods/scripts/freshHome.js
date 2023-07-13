// Retrieve the drink count from localStorage or default to 0
let drinkCount = localStorage.getItem("drinkCount") || 0;
document.getElementById("homeDrinkCount").textContent = `Custom drinks created: ${drinkCount}`;
