const currentTemp = document.querySelector("#temp");
const captionDesc = document.querySelector("figcaption");
const humidityValue = document.querySelector("#humidity-value");
const forecastList = document.querySelector("#forecast-list");
const city = "Carlsbad,us";
const units = "imperial";
const apiKey = "3be9d2580b625a98fc4021b1163f7555";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=24&APPID=${apiKey}`;

async function apiFetch() {
  try {
    const [weatherResponse, forecastResponse] = await Promise.all([
      fetch(url),
      fetch(forecastUrl),
    ]);

    if (weatherResponse.ok && forecastResponse.ok) {
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();

      console.log(weatherData); // for testing purposes
      console.log(forecastData); // for testing purposes

      displayWeather(weatherData);
      displayForecast(forecastData);
    } else {
      throw Error("Weather data could not be retrieved.");
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = capitalizeWords(weatherData.weather[0].description);

  const weatherImage = document.createElement("img");
  weatherImage.setAttribute("src", iconsrc);
  weatherImage.setAttribute("alt", desc);

  const weatherIconContainer = document.querySelector("#weather-icon");
  weatherIconContainer.appendChild(weatherImage);

  captionDesc.textContent = desc;
  humidityValue.textContent = `${weatherData.main.humidity}% humidity`;
}

function displayForecast(forecastData) {
  const forecastItems = forecastData.list.filter((item, index) => index % 8 === 0); // Get one forecast item per day (every 8th item)

  forecastItems.forEach((item) => {
    const forecastDate = new Date(item.dt_txt);
    const forecastDay = forecastDate.toLocaleDateString("en-US", { weekday: "short" });
    const forecastTemp = item.main.temp.toFixed(0);
    const forecastIcon = item.weather[0].icon;

    const iconsrc = `https://openweathermap.org/img/w/${forecastIcon}.png`;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <img src="${iconsrc}" alt="Weather Icon">
      <span>${forecastDay}</span>
      <strong>${forecastTemp} &deg;F</strong>
    `;

    forecastList.appendChild(listItem);
  });
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

apiFetch();
