
var map = (function () {

    "use strict";

    var pub = {};
    var map;

    pub.setup = function () {
        map = L.map('map').setView([-45.875, 170.500], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18,attribution: 'Map data &copy; ' +
            '<a href="http://www.openstreetmap.org/copyright">' + 'OpenStreetMap contributors</a> CC-BY-SA'
        }).addTo(map);
    };

    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', Cart_content.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Cart_content.setup);
} else {
    alert("Could not attach ’Cart_content.setup’ to the ’window.onload’ event");
}