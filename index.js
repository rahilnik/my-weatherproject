<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
		<link rel="stylesheet" href="style.css" />
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <title>Weather App</title>
  </head>

<body>
	<div id="app"></div>
	<div class="weatherapp">
<h1>kermanshah tehran ramsar paris </h1>
<h2> kermanshah</h2>
<div class="clearfix weather-temperature">
	<span id="temperature"> 33°C </span><span class="units">
		
		<a href="#" id="celsius-link">°C</a> |
		<a href="#" id="fahrenheit-link">°F</a>
		<div>
			<span id="description">mostly cloudy</span
			><img src="" alt="Clear" id="icon" />
		  </div>
	</span>
</div>
	<div class="weather-forecast" id="forecast"></div>
	<ul>
		<li>Humidity: <span id="humidity"></span>%</li>
		<li>Wind: <span id="wind"></span> km/h</li>
	</ul>
		<h3> today<