// Get the temperature and wind speed elements from the HTML
let temperatureData = document.querySelector('#temp');
let windSpeedData = document.querySelector('#wind-speed');
let windChillData = document.querySelector('#wind-chill');

// Get the temperature and wind speed values
let temperature = parseFloat(temperatureData.textContent);
let windSpeed = parseFloat(windSpeedData.textContent);

// Calculate the wind chill
let windChill = calculateWindChill(temperature, windSpeed);

// Display the wind chill value
windChillData.textContent = 'Wind Chill: ' + windChill.toFixed(2) + '°F';

// Function to calculate the wind chill
function calculateWindChill(temperature, windSpeed) {
  // Check if the temperature and wind speed are within valid ranges
  if (temperature > 50 || windSpeed < 3) {
    return 'N/A';
  }

  // Calculate the wind chill using the formula
  let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  return windChill;
}
