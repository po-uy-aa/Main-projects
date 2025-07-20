# COMP2110 Week 8

This week, I worked on a Random Joke Generator project. The project includes:

## Random Joke Generator
- An HTML page with a button and two `<p>` elements to display jokes.
- A JavaScript file that fetches random jokes from the Official Joke API.
- Implementation of error handling to display a fallback message in case of network issues.
- Use of `fetch()` to retrieve data and dynamically update the DOM with the joke's setup and punchline.
- Added functionality to fetch and display a list of ten jokes in a `<ul>` element.
- Included a status message to indicate loading or error states.

## Weather App
- An HTML form where users can input a city name and submit to get weather information.
- Modular JavaScript setup with three files:
    - `geo-api.js`: Fetches city coordinates using the Nominatim API.
    - `weather-api.js`: Fetches current weather data using the Open-Meteo API.
    - `main.js`: Handles form submission, calls the APIs, and updates the DOM with results or error messages.
- Displays the city name, today's temperature (rounded), and weather condition.
- Includes loading feedback and error handling for "City not found" or network issues.

