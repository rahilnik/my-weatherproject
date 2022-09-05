var date= new Date();

let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[date.getDay()];
let h3 = document.querySelector("h3");
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
h3.innerHTML = `today is ${day} ${hours}:${minutes}`;
function displayForecast(respons) {
let forecast = respons.data.daily;
  let forecastElement = document.querySelector("#forecast");

  

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
 
function getforecst(coordinates){
  console.log(coordinates);
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579"
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
  
}

        

function searchcity(city) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-submit").value;
  searchcity(city);
}
function displayWeatherCondition(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  let tempelement= document.querySelector("#temperature");
   celsiusTemperature = response.data.main.temp;
  tempelement.innerHTML= Math.round(celsiusTemperature);
  

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
 
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  getforecst(response.data.coord);
  }
  


function displayfahrenheittemperature(event){
  event.preventDefault();
  let tempelement= document.querySelector("#temperature");
  let fahrenheittemperature=(celsiusTemperature*9)/5 + 32;
  tempelement.innerHTML= Math.round(fahrenheittemperature);
}
function displaycelsuistemperature(event){
  event.preventDefault();
  let tempelement= document.querySelector("#temperature");
  tempelement.innerHTML= Math.round(celsiusTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
let celsiusTemperature =null;
let fahrenheitlink = document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", displayfahrenheittemperature);
let celsiuslink = document.querySelector("#celsius-link");
celsiuslink.addEventListener("click", displaycelsuistemperature);
//displayForecast();
searchcity("kermanshah");