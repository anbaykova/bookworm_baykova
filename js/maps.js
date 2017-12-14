


function initMap() {
    var geocoder = new google.maps.Geocoder;
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.148922, lng: -86.8053444},
        zoom: 8
    });
    var origin = {lat: 36.148922, lng: -86.8053444};
    var destination = {lat: 36.796047, lng: -88.074265};
    var marker = new google.maps.Marker(
        {
            position: origin,
            map: map,
            icon: './img/mark.png'
        }
    );
    var nextmarker = new google.maps.Marker(
        {
            position: destination,
            map: map,
            icon: './img/mark.png'
        }
    );

    var infowindow = new google.maps.InfoWindow({
        content: '1001 5th Avenue North, Nashville, TN 37219, USA'
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    var infowindowNext = new google.maps.InfoWindow({
        content: '238 Visitor Center Dr Golden Pond, KY 42211'
    });
    nextmarker.addListener('click', function () {
        infowindowNext.open(map, nextmarker);
    });


    var outputDiv = document.getElementById('output');
    var service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function(response, status) {
        if (status !== 'OK') {
            alert('Error was: ' + status);
        } else {
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;
            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';



            // deleteMarkers(markersArray);

            // var showGeocodedAddressOnMap = function(asDestination) {
            //     var icon = asDestination ? destinationIcon : originIcon;
            //     return function(results, status) {
            //         if (status === 'OK') {
            //             map.fitBounds(bounds.extend(results[0].geometry.location));
            //             markersArray.push(new google.maps.Marker({
            //                 map: map,
            //                 position: results[0].geometry.location,
            //                 icon: icon
            //             }));
            //         } else {
            //             alert('Geocode was not successful due to: ' + status);
            //         }
            //     };
            // };

            for (var i = 0; i < originList.length; i++) {
                var results = response.rows[i].elements;

                // geocoder.geocode({'address': originList[i]},
                    // showGeocodedAddressOnMap(false));
                for (var j = 0; j < results.length; j++) {
                    // geocoder.geocode({'address': destinationList[j]},
                    //     showGeocodedAddressOnMap(true));
                    outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
                        ': ' + results[j].distance.text + ' in ' +
                        results[j].duration.text + '<br>';
                }
            }
        }
    });
}

// function deleteMarkers(markersArray) {
//     for (var i = 0; i < markersArray.length; i++) {
//         markersArray[i].setMap(null);
//     }
//     markersArray = [];
// }










// function nextMarker() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 36.148922, lng: -86.8053444},
//         zoom: 8
//     });
//
//     var marker = new google.maps.Marker(
//         {
//             position: {lat: 36.148922, lng: -86.8053444},
//             map: map,
//             icon: './img/mark.png'
//         }
//     );
//     var infowindow = new google.maps.InfoWindow({
//         content: '1001 5th Avenue North, Nashville, TN 37219, USA'
//     });
//     marker.addListener('click', function () {
//         infowindow.open(map, marker);
//     });
// }

    // var directionsService = new google.maps.DirectionsService;
    // var directionsDisplay = new google.maps.DirectionsRenderer;
    // var mapNext = new google.maps.Map(document.getElementById('mapnext'), {
    //     zoom: 7,
    //     center: {lat: 48.507382, lng: 32.269626}
    // });
    // var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 7,
    //     center: {lat: 36.148922, lng: -86.8053444}
    // });

    // directionsDisplay.setMap(map);

//     var onChangeHandler = function() {
//         calculateAndDisplayRoute(directionsService, directionsDisplay);
//     };
//     document.getElementById('map').addEventListener('change', onChangeHandler);
//     document.getElementById('mapNext).addEventListener('change', onChangeHandler);
// }
//
// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//     directionsService.route({
//         origin: document.getElementById('map').value,
//         destination: document.getElementById('mapnext').value,
//         travelMode: 'DRIVING'
//     }, function(response, status) {
//         if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//         } else {
//             window.alert('Directions request failed due to ' + status);
//         }
//     });
// }

