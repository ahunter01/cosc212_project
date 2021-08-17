var Map = (function () {
    "use strict" ;
    var map;
    var pub = {};

    pub.setup = function() {

      map = L.map('map').setView([-45.875, 170.500], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { maxZoom: 18,
        attribution: 'Map data &copy; ' +
        '<a href="http://www.openstreetmap.org/copyright">' +
        'OpenStreetMap contributors</a> CC-BY-SA'
            }).addTo(map);

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
