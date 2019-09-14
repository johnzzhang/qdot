var map, mapOptions;
var markers = [];
var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();

// Initialize the map and the custom overlay.

function initMap(playerMap) {
  console.log("init map");
  mapOptions =
  {
    zoom: playerMap.zoom,
    center: playerMap.center,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    scrollwheel: false, 
    disableDoubleClickZoom: true,
    draggable: false,
    minZoom: 4,
    maxZoom: 6,
    styles :
    [
      {
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  };

  map = new google.maps.Map(document.getElementById('map'),mapOptions);

  var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(0, 0),
      new google.maps.LatLng(40, 40));

  var srcImage = playerMap.mapImage;

  // The custom USGSOverlay object contains the USGS image,
  // the bounds of the image, and a reference to the map.
  overlay = new USGSOverlay(bounds, srcImage, map);

  drawMarkers(playerMap.markers);

  // bounds of the desired area
  var allowedBounds = new google.maps.LatLngBounds(
       new google.maps.LatLng(5, 5), 
       new google.maps.LatLng(35, 35)
  );
  var lastValidCenter = map.getCenter();

  google.maps.event.addListener(map, 'center_changed', function() {
      if (allowedBounds.contains(map.getCenter())) {
          // still within valid bounds, so save the last valid position
          lastValidCenter = map.getCenter();
          return; 
      }

      // not valid anymore => return to last valid position
      map.panTo(lastValidCenter);
  });
}

/** @constructor */
function USGSOverlay(bounds, image, map) {
  // Initialize all properties.
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;

  // Define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;

  // Explicitly call setMap on this overlay.
  this.setMap(map);
}

/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
USGSOverlay.prototype.onAdd = function() {

  var div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';

  // Create the img element and attach it to the div.
  var img = document.createElement('img');
  img.src = this.image_;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.position = 'absolute';
  div.appendChild(img);

  this.div_ = div;

  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};

USGSOverlay.prototype.draw = function() {

  // We use the south-west and north-east
  // coordinates of the overlay to peg it to the correct position and size.
  // To do this, we need to retrieve the projection from the overlay.
  var overlayProjection = this.getProjection();

  // Retrieve the south-west and north-east coordinates of this overlay
  // in LatLngs and convert them to pixel coordinates.
  // We'll use these coordinates to resize the div.
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  // Resize the image's div to fit the indicated dimensions.
  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.height = (sw.y - ne.y) + 'px';
};

// The onRemove() method will be called automatically from the API if
// we ever set the overlay's map property to 'null'.
USGSOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};

function drawMarkers(jsonMarkers) {
  for(var i = 0; i < jsonMarkers.length; i++)
  {
    marker = new google.maps.Marker({
        map: map,
        icon: 
        {
          url: jsonMarkers[i].icon,
          scaledSize: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(25, 50)
        },
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: jsonMarkers[i].position,
    });
    markers.push(marker);
  }
}

