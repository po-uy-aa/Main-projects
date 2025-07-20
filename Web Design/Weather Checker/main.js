import { getCoordinates } from './geo-api.js';
import { fetchWeather } from './weather-api.js';

const form = document.getElementById('weather-form');
const input = document.getElementById('city-input');
const result = document.getElementById('result');

// Optional: map weather codes to text descriptions
const weatherCodes = {
  0: 'Clear',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Light rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  80: 'Rain showers',
  95: 'Thunderstorm',
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = input.value.trim();
  result.textContent = 'Loading...';

  try {
    const { lat, lon, name } = await getCoordinates(city);
    const weather = await fetchWeather(lat, lon);

    const readableWeather = weatherCodes[weather.weathercode] || 'Unknown';

    result.textContent = `Weather in ${name.split(',')[0]}: ${readableWeather}, ${Math.round(weather.temperature)}°C`;
  } catch (err) {
    result.textContent = err.message;
    console.error(err);
  }
});