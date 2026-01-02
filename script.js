const apiKey = "dc60ba242880103ceb2605b4751d332f"; // Your API Key

document.getElementById("getWeatherBtn").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value;
    if(city === "") {
        alert("Please enter a city name!");
        return;
    }
    getWeather(city);
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            alert("City not found!");
            return;
        }
        const data = await response.json();

        const weatherHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = weatherHTML;
    } catch(error) {
        alert("Error fetching weather data");
        console.error(error);
    }
}
