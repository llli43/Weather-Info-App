// Simulated weather data
const weatherData = {
    Sydney: { temperature: 24, condition: "Sunny", humidity: 55 },
    Melbourne: { temperature: 19, condition: "Cloudy", humidity: 63 },
    Brisbane: { temperature: 28, condition: "Partly Cloudy", humidity: 70 },
    Perth: { temperature: 30, condition: "Hot and Dry", humidity: 40 },
    Adelaide: { temperature: 22, condition: "Clear Sky", humidity: 50 }
};

// Get DOM elements
const citySelect = document.getElementById("city");
const showWeatherBtn = document.getElementById("showWeather");
const weatherResult = document.getElementById("weatherResult");

// Event listener for button click
showWeatherBtn.addEventListener("click", () => {
    const city = citySelect.value;

    if (!city) {
        weatherResult.innerHTML = "<p>Please select a city first.</p>";
        return;
    }

    const data = weatherData[city];
    weatherResult.innerHTML = `
        <h2>${city}</h2>
        <p><strong>Temperature:</strong> ${data.temperature}°C</p>
        <p><strong>Condition:</strong> ${data.condition}</p>
        <p><strong>Humidity:</strong> ${data.humidity}%</p>
    `;
});
// Back to Top button functionality
const backToTopBtn = document.getElementById("backToTop");
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
