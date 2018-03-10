
function getLongLat(location){
	console.log(location);
	$.getJSON('https://maps.googleapis.com/maps/api/geocode/json',{
			address:`${location}`,
			key:'AIzaSyASP9vWd3OTWFUDn6FoliMof9g8k3PVYds'
		}, 
		function(response){
			console.log(response);
		});
}

// function displayData(data){
//   console.log(data);
// }

function enterLocation(){

	$('.location-form').submit(event =>
	{
		event.preventDefault();
		let query = $('.js-query').val();
		let address = encodeURIComponent(query);
		$('.js-query').val('');
		getLongLat(address);

	})

}

function activatePlacesSearch(){

	let input = document.getElementById('autocomplete')
	let autocomplete = new google.maps.places.Autocomplete(input);

}

$(enterLocation)