
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.148922, lng: -86.8053444},
        zoom: 8
    });

    var marker = new google.maps.Marker(
        {
            position: {lat: 36.148922, lng: -86.8053444},
            map: map,
            icon: './img/mark.png'
        }
    );
    var nextmarker = new google.maps.Marker(
        {
            position: {lat: 36.796047, lng: -88.074265},
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

}
    var infowindowNext = new google.maps.InfoWindow({
        content: '1001 5th Avenue North, Nashville, TN 37219, USA'
    });
    nextmarker.addListener('click', function () {
        infowindowNext.open(map, nextmarker);
    })





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

