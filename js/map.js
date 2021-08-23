var Map = (function () {
    "use strict" ;

    var geojsonFeature = JSON.parse("POI.geoJSON")

    var map;
    var officeMarker, markerLocation, markerBounds;
    var secondMarker;
    var pub = {};

    pub.setup = function() {

      map = L.map('map').setView([-45.875, 170.500], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { maxZoom: 18,
        attribution: 'Map data &copy; ' +
        '<a href="http://www.openstreetmap.org/copyright">' +
        'OpenStreetMap contributors</a> CC-BY-SA'
            }).addTo(map);

      officeMarker = L.marker([-45.858545, 170.514191]).addTo(map);

      markerLocation = [officeMarker.getLatLng()];
      markerBounds = L.latLngBounds(markerLocation);
      map.fitBounds(markerBounds);

      L.geoJSON(geojsonFeature).addTo(map);

    };
    return pub;
}());

if (window.addEventListener) {
window.addEventListener('load', Map.setup);
} else if (window.attachEvent) {
window.attachEvent('onload', Map.setup);
} else {
alert("Could not attach ’Map.setup’ to the ’window.onload’ event");
}
