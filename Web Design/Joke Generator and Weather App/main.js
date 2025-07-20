import { getCoordinates } from './geo-api.js';
import { fetchWeather } from './weather-api.js';

document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityInput = document.getElementById('cityInput').value;
    const statusMessage = document.getElementById('statusMessage');
    const weatherResult = document.getElementById('weatherResult');

    statusMessage.textContent = 'Loading...';
    weatherResult.textContent = '';

    try {
        const { lat, lon } = await getCoordinates(cityInput);
        const { temperature, condition } = await fetchWeather(lat, lon);
        statusMessage.textContent = '';
        weatherResult.textContent = `Weather in ${cityInput}: ${condition}, ${temperature}°C`;
    } catch (error) {
        statusMessage.textContent = 'Error: ' + error.message;
        weatherResult.textContent = '';
    }
});