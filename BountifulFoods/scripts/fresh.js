// Retrieve the current drink count from localStorage or default to 0
let drinkCount = localStorage.getItem("drinkCount") || 0;
document.getElementById(
  "drinkCount"
).textContent = `Custom drinks created: ${drinkCount}`;

// Load the fruit data from JSON file
fetch("fruits.json")
  .then((response) => response.json())
  .then((fruitData) => {
    // Populate the fruit select options
    const fruitSelects = document.querySelectorAll('select[id^="fruit"]');
    fruitSelects.forEach((select) => {
      fruitData.forEach((fruit) => {
        const option = document.createElement("option");
        option.value = fruit.name;
        option.textContent = fruit.name;
        select.appendChild(option);
      });
    });

    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault();

      // Get form input values
      const drinkName = document.getElementById("drinkName").value;
      const firstName = document.getElementById("firstName").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phone").value;
      const fruit1 = document.getElementById("fruit1").value;
      const fruit2 = document.getElementById("fruit2").value;
      const fruit3 = document.getElementById("fruit3").value;
      const specialInstructions = document.getElementById(
        "specialInstructions"
      ).value;

      // Calculate total nutrition based on selected fruits
      const selectedFruits = [fruit1, fruit2, fruit3];
      let totalNutrition = {
        carbohydrates: 0,
        protein: 0,
        fat: 0,
        calories: 0,
        sugar: 0,
      };

      selectedFruits.forEach((fruitName) => {
        const fruit = fruitData.find((fruit) => fruit.name === fruitName);
        if (fruit) {
          totalNutrition.carbohydrates += fruit.nutritions.carbohydrates;
          totalNutrition.protein += fruit.nutritions.protein;
          totalNutrition.fat += fruit.nutritions.fat;
          totalNutrition.calories += fruit.nutritions.calories;
          totalNutrition.sugar += fruit.nutritions.sugar;
        }
      });

      // Convert the nutrition values to 2 decimal places
      totalNutrition.carbohydrates = totalNutrition.carbohydrates.toFixed(2);
      totalNutrition.protein = totalNutrition.protein.toFixed(2);
      totalNutrition.fat = totalNutrition.fat.toFixed(2);
      totalNutrition.calories = totalNutrition.calories.toFixed(2);
      totalNutrition.sugar = totalNutrition.sugar.toFixed(2);

      // Store the drink information in local storage
      const drinkInfo = {
        drinkName,
        firstName,
        email,
        phoneNumber,
        totalNutrition,
        specialInstructions,
      };
      localStorage.setItem("drinkInfo", JSON.stringify(drinkInfo));

      // Display the order details below the form
      const orderOutput = document.getElementById("orderOutput");
      orderOutput.innerHTML = `
        <h3>Order Details</h3>
        <p><strong>Drink Name:</strong> ${drinkName}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Fruit 1:</strong> ${fruit1}</p>
        <p><strong>Fruit 2:</strong> ${fruit2}</p>
        <p><strong>Fruit 3:</strong> ${fruit3}</p>
        <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
        <p><strong>Total Nutrition:</strong></p>
        <ul>
          <li><strong>Carbohydrates:</strong> ${
            totalNutrition.carbohydrates
          }</li>
          <li><strong>Protein:</strong> ${totalNutrition.protein}</li>
          <li><strong>Fat:</strong> ${totalNutrition.fat}</li>
          <li><strong>Calories:</strong> ${totalNutrition.calories}</li>
          <li><strong>Sugar:</strong> ${totalNutrition.sugar}</li>
        </ul>
        <p>Order date: ${new Date().toLocaleString()}</p>
      `;
      // Increment the drink count and update the display
      drinkCount++;
      document.getElementById(
        "drinkCount"
      ).textContent = `Custom drinks created: ${drinkCount}`;
      localStorage.setItem("drinkCount", drinkCount);
    }

    // Add event listener to the form
    const drinkForm = document.getElementById("drinkForm");
    drinkForm.addEventListener("submit", handleFormSubmit);
  });
