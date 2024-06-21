//script src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin = "" ></script >
//script type = "text/javascript"
navigator.geolocation.getCurrentPosition(function (position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  const waypoints = [
    L.latLng(latitude, longitude),
    L.latLng(41.40354, 2.15119)
  ]

  let map = L.map('map', 
  /*{
    center: [41.40354, 2.15119],
    zoom: 19
  }*/
  );

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  let control = L.Routing.control({
    waypoints: waypoints,
    language: 'es',
    show: false
  }).addTo(map);

  control.on('routesfound', function (e) {
    var routes = e.routes;
    var bounds = L.latLngBounds();

    // Recorre las coordenadas de cada ruta y amplía los límites
    routes.forEach(function (route) {
      route.coordinates.forEach(function (coord) {
        bounds.extend(coord);
      });
    });

    // Ajustar el mapa a los límites de la ruta
    map.fitBounds(bounds);
  });

})