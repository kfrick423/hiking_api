
function getLongLat(location){
	console.log(location);
	$.getJSON('https://maps.googleapis.com/maps/api/geocode/json',{
			address:`${location}`,
			key:'AIzaSyASP9vWd3OTWFUDn6FoliMof9g8k3PVYds'
		}, 
		function(response){
			// console.log(response);
			let lat = response.results[0].geometry.location.lat;
			let lng = response.results[0].geometry.location.lng;
			getWeatherData(lat, lng);
			getHikeData(lat, lng);
			getClimbData(lat, lng);
		});
}

function getWeatherData(lat, lng){
  console.log(lat);
  console.log(lng);
  $.getJSON(`http://api.wunderground.com/api/9ec732be1542c3fd/forecast10day/q/${lat},${lng}.json`,{

  }, function(weatherResponse){
  	let widget = renderWeatherData(weatherResponse);
  
  	$('.weather_results').html(widget);
  });
}

function renderWeatherData(data){
	 console.log(data);
	return `
	<div class="weather_results">
		<ul>
		  <li>${data.forecast.simpleforecast.forecastday[0].date.weekday}</li>
		  <li>${data.forecast.simpleforecast.forecastday[0].date.day} ${data.forecast.simpleforecast.forecastday[0].date.monthname} ${data.forecast.simpleforecast.forecastday[0].date.year}</li>	
			<li><img src="${data.forecast.simpleforecast.forecastday[0].icon_url}"></li>
			<li>${data.forecast.simpleforecast.forecastday[0].conditions}</li>
			<li>High Temp: ${data.forecast.simpleforecast.forecastday[0].high.fahrenheit} &#8457 </li>
			<li>Low Temp: ${data.forecast.simpleforecast.forecastday[0].low.fahrenheit} &#8457 </li>
		</ul>		

		<ul>
		  <li>${data.forecast.simpleforecast.forecastday[1].date.weekday}</li>
		  <li>${data.forecast.simpleforecast.forecastday[1].date.day} ${data.forecast.simpleforecast.forecastday[1].date.monthname} ${data.forecast.simpleforecast.forecastday[1].date.year}</li>	
			<li><img src="${data.forecast.simpleforecast.forecastday[1].icon_url}"></li>
			<li>${data.forecast.simpleforecast.forecastday[1].conditions}</li>
			<li>High Temp: ${data.forecast.simpleforecast.forecastday[1].high.fahrenheit} &#8457 </li>
			<li>Low Temp: ${data.forecast.simpleforecast.forecastday[1].low.fahrenheit} &#8457 </li>
		</ul>	
		<ul>
		  <li>${data.forecast.simpleforecast.forecastday[2].date.weekday}</li>
		  <li>${data.forecast.simpleforecast.forecastday[2].date.day} ${data.forecast.simpleforecast.forecastday[2].date.monthname} ${data.forecast.simpleforecast.forecastday[2].date.year}</li>	
			<li><img src="${data.forecast.simpleforecast.forecastday[2].icon_url}"></li>
			<li>${data.forecast.simpleforecast.forecastday[2].conditions}</li>
			<li>High Temp: ${data.forecast.simpleforecast.forecastday[2].high.fahrenheit} &#8457 </li>
			<li>Low Temp: ${data.forecast.simpleforecast.forecastday[2].low.fahrenheit} &#8457 </li>
		</ul>	
		<ul>
		  <li>${data.forecast.simpleforecast.forecastday[3].date.weekday}</li>
		  <li>${data.forecast.simpleforecast.forecastday[3].date.day} ${data.forecast.simpleforecast.forecastday[3].date.monthname} ${data.forecast.simpleforecast.forecastday[3].date.year}</li>	
			<li><img src="${data.forecast.simpleforecast.forecastday[3].icon_url}"></li>
			<li>${data.forecast.simpleforecast.forecastday[3].conditions}</li>
			<li>High Temp: ${data.forecast.simpleforecast.forecastday[3].high.fahrenheit} &#8457 </li>
			<li>Low Temp: ${data.forecast.simpleforecast.forecastday[3].low.fahrenheit} &#8457 </li>
		</ul>	
		<ul>
		  <li>${data.forecast.simpleforecast.forecastday[4].date.weekday}</li>
		  <li>${data.forecast.simpleforecast.forecastday[4].date.day} ${data.forecast.simpleforecast.forecastday[4].date.monthname} ${data.forecast.simpleforecast.forecastday[4].date.year}</li>	
			<li><img src="${data.forecast.simpleforecast.forecastday[4].icon_url}"></li>
			<li>${data.forecast.simpleforecast.forecastday[4].conditions}</li>
			<li>High Temp: ${data.forecast.simpleforecast.forecastday[4].high.fahrenheit} &#8457 </li>
			<li>Low Temp: ${data.forecast.simpleforecast.forecastday[4].low.fahrenheit} &#8457 </li>
		</ul>	
  </div>`;

}

function getHikeData(lat, lng){
	$.getJSON('https://www.hikingproject.com/data/get-trails?',{
		lat: `${lat}`,
		lon: `${lng}`,
		maxDistance: 50,
		key: '200228708-342833161758642e366f0f5189964977'
  }, 
  function(hikeResponse){
    console.log(hikeResponse);
  });
}

function getClimbData(lat, lng){
	$.getJSON('https://www.mountainproject.com/data/get-routes-for-lat-lon?',{
		lat: `${lat}`,
		lon: `${lng}`,
		maxDistance: 50,
		minDiff: 5.6,
		maxDiff: 5.11,
		key: '200228708-038c5314f084927567e4ee92d566df92'
	}, 
	function(climbResponse){
    console.log(climbResponse);
	});
}


function enterLocation(){
		let address = "San+Francisco,+CA";
		getLongLat(address);
	// $('.location-form').submit(event =>
	// {
	// 	event.preventDefault();
	// 	let query = $('.js-query').val();
	// 	let address = encodeURIComponent(query);
	// 	$('.js-query').val('');

	// })

}


function activatePlacesSearch(){

	let input = document.getElementById('autocomplete')
	let autocomplete = new google.maps.places.Autocomplete(input);

}

$(enterLocation)