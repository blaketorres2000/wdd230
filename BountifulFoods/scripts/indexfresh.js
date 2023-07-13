// Load the drink information from local storage
const drinkInfo = JSON.parse(localStorage.getItem("drinkInfo"));

// Display the drink name on the index.html page
if (drinkInfo && drinkInfo.drinkName) {
  const drinkNameElement = document.getElementById("drinkName");
  drinkNameElement.textContent = drinkInfo.drinkName;
} else {
  const drinkNameElement = document.getElementById("drinkName");
  drinkNameElement.textContent = "No drink selected";
}
``;
