var map;
var geocoder;
function initialize() {
	geocoder = new google.maps.Geocoder();
	var mapCanvas = document.getElementById('map_canvas');
	var mapOptions = {
	  center: new google.maps.LatLng(44.5403, 1.5463),
	  zoom: 12,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(mapCanvas, mapOptions);
	codeAddress('@@clientStreet @@clientZipcode @@clientCity');
}

function codeAddress(address) {
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		}
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
