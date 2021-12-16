// Require below div elements in the main html file:
// City Name <div id="cityn"> </div> 
// Temperature <div id="temp"> </div> 
// Feels Like <div id="feelsl"></div>
// Humidity <div id="hum"></div>



		const key = 'e0468fb1f425a8789e7bf7834c7ada3a';
		function weathercrawler(cityID) {
		fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid='+ key)
		.then(function(resp) {return resp.json()})
		.then(function(data){
			console.log(data);
			drawWeather(data);
		});
		}
		function drawWeather( d ) {
		var tempg = ((d.main.temp) - 273.15).toFixed(2); // In Celsius with 2 decimal degrees
		var feelslike = ((d.main.feels_like) - 273.15).toFixed(2);
		var humid = (d.main.humidity);
		var cityname = (d.name);
		 document.getElementById('temp').innerHTML = tempg;
		 document.getElementById('feelsl').innerHTML = feelslike;
		 document.getElementById('hum').innerHTML = humid;
		 document.getElementById('cityn').innerHTML = cityname;
		}

		var results;
		var searchField = "name";

		var searchVal = "Shenzhen"; // Replace this input with Twitter API location output.

		for (var i=0 ; i < city.length ; i++)
		{
		    if (city[i][searchField] == searchVal) {
		        results = city[i].id;
		    }
		}

		window.onload = function() {
		 weathercrawler(results);
		}