function calculateWindChill(temperature, windSpeed) {
  let windChillData = document.querySelector("#wind-chill");

  if (temperature > 50 || windSpeed < 3) {
    windChillData.textContent = "Wind Chill: N/A";
  } else {
    let windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);
    windChillData.textContent = "Wind Chill: " + windChill.toFixed(0) + "°F";
  }
}

const currentTemp = document.querySelector("#temp");
const captionDesc = document.querySelector("figcaption");
const windSpeedElement = document.querySelector("#wind-speed");
const city = "Fred,us";
const units = "imperial";
const apiKey = "3be9d2580b625a98fc4021b1163f7555";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = capitalizeWords(weatherData.weather[0].description);

  // Create the image element dynamically
  const weatherImage = document.createElement("img");
  weatherImage.setAttribute("src", iconsrc);
  weatherImage.setAttribute("alt", desc);

  // Get the parent container where the image should be appended
  const weatherIconContainer = document.querySelector("#weather-icon");
  // Append the image element to the container
  weatherIconContainer.appendChild(weatherImage);

  captionDesc.textContent = desc;

  const windSpeedMph = weatherData.wind.speed;
  const temperatureFahrenheit = weatherData.main.temp;
  windSpeedElement.textContent = `Wind Speed: ${windSpeedMph.toFixed(0)} mph`;

  calculateWindChill(temperatureFahrenheit, windSpeedMph);
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

apiFetch();


// function calculateWindChill(temperature, windSpeed) {
//   let windChillData = document.querySelector("#wind-chill");

//   if (temperature > 50 || windSpeed < 3) {
//     windChillData.textContent = "Wind Chill: N/A";
//   } else {
//     let windChill =
//       35.74 +
//       0.6215 * temperature -
//       35.75 * Math.pow(windSpeed, 0.16) +
//       0.4275 * temperature * Math.pow(windSpeed, 0.16);
//     windChillData.textContent = "Wind Chill: " + windChill.toFixed(0) + "°F";
//   }
// }

// const currentTemp = document.querySelector("#temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDesc = document.querySelector("figcaption");
// const windSpeedElement = document.querySelector("#wind-speed");
// const city = "Fred,us";
// const units = "imperial";
// const apiKey = "3be9d2580b625a98fc4021b1163f7555";

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;

// async function apiFetch() {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // this is for testing the call
//       displayResults(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// function displayResults(weatherData) {
//   currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
//     0
//   )}</strong>`;

//   const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//   const desc = capitalizeWords(weatherData.weather[0].description);

//   weatherIcon.setAttribute("src", iconsrc);
//   weatherIcon.setAttribute("alt", desc);
//   captionDesc.textContent = desc;

//   const windSpeedMph = weatherData.wind.speed;
//   const temperatureFahrenheit = weatherData.main.temp;
//   windSpeedElement.textContent = `Wind Speed: ${windSpeedMph.toFixed(0)} mph`;

//   calculateWindChill(temperatureFahrenheit, windSpeedMph);
// }

// function capitalizeWords(str) {
//   return str.replace(/\b\w/g, (match) => match.toUpperCase());
// }

// apiFetch();
