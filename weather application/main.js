// constants
const API_KEY = `28fead15a358cdecbc1afafafa1dfef367e71acef`;

// event listener
document.body.onload = function () {
  fetchWeather();
};
// document.body.addEventListener("onload", fetchWeather());

// all function definition
function fetchWeather(city = "khulna") {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name: city,
        sys: { country },
        main: { temp },
        weather,
      } = data;

      displayWeather(city, country, temp, weather);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function displayWeather(city, country, temp, weather) {
  const city_name = document.getElementById("city-name");
  const date = document.getElementById("date");
  const temperature = document.getElementById("temperature");
  const celcius = document.getElementById("celcius");
  const status = document.getElementById("celcius");

  city_name.innerText = city + "," + country;
  temperature.innerText = temp;
  status.innerText = weather[0].main;
}

document.getElementById("input-text").addEventListener("input", function (e) {
  fetchWeather("khulna");
});
