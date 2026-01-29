document.addEventListener('DOMContentLoaded', function () {


    document.querySelector('.info-section #weather-form .submit').addEventListener('click', (e) => {
        e.preventDefault();
        
        const city = document
            .getElementById('city').value.trim().toLowerCase();


        const apiKey = 'ffc74c9e41d3cd99bf6bb25a7f582a7a';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const weatherInfo = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherResult').innerHTML = weatherInfo;
            })
            .catch(error => {
                document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
            });
    });
});