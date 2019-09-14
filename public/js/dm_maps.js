var map, mapOptions;
var markers = [];
var jsonMarkers = [];
var srcImage, title;
var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();
var bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(0, 0),
    new google.maps.LatLng(40, 40));

charMarkers = 
{
  'skeleton': 
  {
    'position': { 'lat':20, 'lng':20 },
    'icon':  '/static/images/skeleton.png'
  },
  'colbol': 
  {
    'position': { 'lat':20, 'lng':20 },
    'icon':  '/static/images/colbol.png'
  },
  'wingedcolbol': 
  {
    'position': { 'lat':20, 'lng':20 },
    'icon':  '/static/images/wingedcolbol.png'
  },
  'evilwizard': 
  {
    'position': { 'lat':20, 'lng':20 },
    'icon':  '/static/images/evilwiz.png'
  },
  'thug': 
  {
    'position': { 'lat':20, 'lng':20 },
    'icon':  '/static/images/thug.png'
  },
  'horse': 
  {
    'position': { 'lat':20, 'lng':20 },
    'icon':  '/static/images/horse.png'
  },
  'wolf': 
  {
    'position': { 'lat':20, 'lng':20 },
    'icon':  '/static/images/wolf.png'
  },
  'dragon': 
  {
    'position': { 'lat':20, 'lng':20 },
    'icon':  '/static/images/dragon.png'
  }
};

// Initialize the map and the custom overlay.
function initMap(playerMap) {
  mapOptions =
  {
    zoom: playerMap.zoom,
    center: playerMap.center,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    scrollwheel: true, 
    disableDoubleClickZoom: true,
    draggable: true,
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

  bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(0, 0),
      new google.maps.LatLng(40, 40));

  srcImage = playerMap.mapImage;

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

function saveMap() {
  const url = document.createElement("a");
  url.href = window.location.href;
  const lobby_id = url.pathname.split("/")[2];

  for(var i = 0; i < markers.length; i++)
  {
    jsonMarkers.push({
      'icon':markers[i].icon.url,
      'position': {'lat':markers[i].getPosition().lat(), 'lng':markers[i].getPosition().lng()}
    });
  }

  const data = {
    lobby_id: lobby_id,
    mapImage: srcImage,
    zoom: map.getZoom(),
    center: map.getCenter(),
    markers: jsonMarkers
  };

  post('/api/map/save', data);
}

function addMarker(title) {
  console.log('Adding ' + title + ' marker');
  marker = new google.maps.Marker({
      map: map,
      icon: 
      {
        url: charMarkers[title].icon,
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 50)
      },
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: charMarkers[title].position,
  });
  markers.push(marker);
}

function drawMarkers(jsonMarkers) {
  for(var i = 0; i < jsonMarkers.length; i++)
  {
    marker = new google.maps.Marker({
        map: map,
        icon: 
        {
          url: jsonMarkers[i].icon,
          scaledSize: new google.maps.Size(64, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(32, 64)
        },
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: jsonMarkers[i].position,
    });
    markers.push(marker);
  }
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function switchSnow() {
  srcImage = '/static/images/maps/snow.jpg';
  overlay = new USGSOverlay(bounds, srcImage, map);
}

function switchTavern() {
  srcImage = '/static/images/maps/tavern.jpg';
  overlay = new USGSOverlay(bounds, srcImage, map);
}

function switchForest() {
  srcImage = '/static/images/maps/forest.jpg';
  overlay = new USGSOverlay(bounds, srcImage, map);
}

function switchUrban() {
  srcImage = '/static/images/maps/urban.jpg';
  overlay = new USGSOverlay(bounds, srcImage, map);
}

function renderCharacterIcons(lobbyId) {
  var iconAlbum = document.getElementById('charicons');
  get('/api/lobby/characters', { 'lobby_id': lobbyId }, function(characterList) {
    for(var i = 0; i < characterList.length; i++) {
      const currentChar = characterList[i];
      get('/api/charactersheet', { 'char_id': currentChar }, function(character) {
        iconAlbum.prepend(charDOMObject(character.charAppearance,character.charName));
        charMarkers[character.charName] = 
        {
          'position': { 'lat':20, 'lng':20 },
          'icon':  character.charAppearance
        };
      });
    }
  });
}

function charDOMObject(icon,name) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardImg = document.createElement('img');
  cardImg.setAttribute('src', icon);
  card.appendChild(cardImg);

  card.addEventListener('click', function() {
    addMarker(name);
  });

  return card;
}

function main() {
  const url = document.createElement("a");
  url.href = window.location.href;
  const lobby_id = url.pathname.split("/")[2];
  renderCharacterIcons(lobby_id);
}

main();