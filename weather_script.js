const apiKey = 'ab4b373ebd60d675f459f62c753a2a9d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const cityInput = document.getElementById('city').value;

    if (cityInput) {
        const url = `${apiUrl}?q=${cityInput}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    } else {
        alert('Please enter a city name.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}