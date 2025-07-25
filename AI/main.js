

	var map = L.map('map').setView([21.03529, 105.80923], 11);
	mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

	var taxiIcon = L.icon({
		iconUrl:'anh.png'
	})

	var marker = L.marker([21.03529, 105.80923], { icon: taxiIcon }).addTo(map);

	map.on('click', function (e) {
		console.log(e)
		var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
		L.Routing.control({
			waypoints: [
				L.latLng(21.03529, 105.80923),
				L.latLng(e.latlng.lat, e.latlng.lng)
			]
		}).on('routesfound', function (e) {
			var routes = e.routes;
			console.log(routes);

			e.routes[0].coordinates.forEach(function (coord, index) {
				setTimeout(function () {
					marker.setLatLng([coord.lat, coord.lng]);
				}, 100 * index)
			})

		}).addTo(map);
	});

	