
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.148922, lng: -86.8053444},
        zoom: 8
    });

    var marker = new google.maps.Marker (
        {
        position: {lat: 36.148922, lng: -86.8053444},
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

