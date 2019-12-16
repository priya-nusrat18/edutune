(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        
        var myCenter = new google.maps.LatLng(40.7875015, -73.9762674);

        function initialize() {
            var mapProp = {
                center: myCenter,
                scrollwheel: false,
                zoom: 11,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                    "featureType": "landscape",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 65
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 51
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.highway",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 30
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "road.local",
                    "stylers": [{
                        "color": "#F1F1F1"
                    }, {
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "administrative.province",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#f9bf3b"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#C8D7D4"
                    }, {
                        "visibility": "on"
                    }]
                }]
            };

            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            marker.setMap(map);
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    })
}(jQuery));

(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        
        var myCenter = new google.maps.LatLng(40.7875015, -73.9762674);

        function initialize() {
            var mapProp = {
                center: myCenter,
                scrollwheel: false,
                zoom: 10,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                    "featureType": "landscape",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 65
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 51
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.highway",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 30
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "road.local",
                    "stylers": [{
                        "color": "#F1F1F1"
                    }, {
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "administrative.province",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#f9bf3b"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#C8D7D4"
                    }, {
                        "visibility": "on"
                    }]
                }]
            };

            var map = new google.maps.Map(document.getElementById("contactMap"), mapProp);
              var marker = new google.maps.Marker({
                    position: myCenter,
                    icon: 'assets/img/map-marker.png'
            });
            marker.setMap(map);
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    })
}(jQuery));