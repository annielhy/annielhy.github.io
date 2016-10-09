// @AUTHOR: evanthebouncy@github
// God don't look at this code lol this is speghetits at its finest ;) 0 abstraction

var drawColor = "Green";

var allMarkers = [];
var allCircles = [];
var loc_marker = null;



// ============== CREATING BUTTONS ============

// function to create toggle green btn
function CenterControlBtnGreen(controlDiv, map, placeMarker) {

  // Set CSS for the control border.
  var controlUI = document.createElement('button');
  controlUI.style.display = 'block';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Color Green';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    drawColor = "Green";

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("HEY");
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      placeMarker(pos);
    }, function() {
      // handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    // DO NOTHING LMFAO
  }

  });
}

// function to create toggle red btn
function CenterControlBtnRed(controlDiv, map, placeMarker) {

  // Set CSS for the control border.
  var controlUI = document.createElement('button');
  controlUI.style.display = 'block';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Color Red';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    drawColor = "Red";


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("HEY");
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      placeMarker(pos);
    }, function() {
      // handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    // DO NOTHING LMFAO
  }


  });
}

// function to create toggle grey btn
function CenterControlBtnGrey(controlDiv, map, placeMarker) {

  // Set CSS for the control border.
  var controlUI = document.createElement('button');
  controlUI.style.display = 'block';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Color Grey';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    drawColor = "Grey";


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("HEY");
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      placeMarker(pos);
    }, function() {
      // handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    // DO NOTHING LMFAO
  }


  });
}


// function to create Undo button
function CenterControlBtnUndo(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('button');
  controlUI.style.display = 'block';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Undo';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    if (allMarkers.length > 0) {
      var lastMarker = allMarkers.pop();
      var lastCircle = allCircles.pop();
      lastMarker.setMap(null);
      lastCircle.setMap(null);
    } else {
      // Do nothing
    }
  });
}


// function to create Clear button
function CenterControlBtnClear(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('button');
  controlUI.style.display = 'block';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Clear';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    while(allMarkers.length > 0) {
      var lastMarker = allMarkers.pop();
      var lastCircle = allCircles.pop();
      lastMarker.setMap(null);
      lastCircle.setMap(null);
    }
  });
}

// function to create Timer button
function CenterControlBtnTimer(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('button');
  controlUI.style.display = 'block';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Timer';
  controlUI.appendChild(controlText);

  var self = this;
  this.timeoutTS = null;
  this.timeoutID = null;

  self.timerFunc = function(){
      var currentTS = (new Date()).getTime();
      var remainTS = self.timeoutTS - currentTS;
      if(remainTS>0){
         var remainMin = Math.floor(remainTS/60000);
         var remainSec = Math.floor(remainTS/1000)%60;
         controlText.innerHTML = remainMin+":"+((remainSec<10)?"0":"")+remainSec;
         self.timeoutID = setTimeout(self.timerFunc, 1000);
      } else {
         self.clearTimer();
       }
  };

  self.startTimer = function(){
     if(!self.timeoutTS){
        self.timeoutTS = (new Date()).getTime()+15*60000;
        self.timerFunc();
     }
  };

  self.clearTimer = function(){
     self.timeoutTS = null;
     clearTimeout(self.timeoutID);
     self.timeoutID = null;
     controlText.innerHTML = 'Timer';
  };



  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    if(!self.timeoutTS){
       self.startTimer();
    }else{
       self.clearTimer();
    }
  });
}


// function to create Locate button
function CenterControlBtnLocate(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '10px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Where am I?';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("HEY");
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        if (loc_marker != null) {
          loc_marker.setMap(null);
        }
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            clickable: false
        });
        loc_marker = marker;
      }, function() {
        // handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      // DO NOTHING LMFAO
    }

  });
}


function initMap() {
  // Create the map.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 37.090, lng: -95.712},
    mapTypeId: 'terrain',
    clickableIcons: false
  });

  function placeMarker(location) {
      var imageGrn = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
      var imageRed = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
      var imageGrey = "http://storage.googleapis.com/support-kms-prod/SNP_2752063_en_v0";
      var image = null;
      var fillColor = null;
      var radius = 200;
      if (drawColor == "Green") {
        image = imageGrn;
        fillColor = "#00FF00";
      } else if (drawColor == "Grey") {
        image = imageGrey;
        radius = 70;
        fillColor = "#666666";
      } else {
        image = imageRed;
        fillColor = "#FF0000";
      } 

      var marker = new google.maps.Marker({
          position: location, 
          map: map,
          icon: image
      });

      allMarkers.push(marker);

      var circle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.0,
        strokeWeight: 0,
        fillColor: fillColor,
        fillOpacity: 0.2,
        map: map,
        center: location,
        radius: radius,
        clickable: false
      });

      allCircles.push(circle);

  }

  // Add buttons
  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  var centerControlDiv = document.createElement('div');
  var centerControlGreen = new CenterControlBtnGreen(centerControlDiv, map, placeMarker);
  var centerControlRed = new CenterControlBtnRed(centerControlDiv, map, placeMarker);
  var centerControlGrey = new CenterControlBtnGrey(centerControlDiv, map, placeMarker);
  var centerControlUndo = new CenterControlBtnUndo(centerControlDiv, map);
  var centerControlClear = new CenterControlBtnClear(centerControlDiv, map);
  var centerControlTimer = new CenterControlBtnTimer(centerControlDiv, map);
  var centerControlLocate = new CenterControlBtnLocate(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("HEY");
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // infoWindow.setPosition(pos);
      // infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      // handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    // DO NOTHING LMFAO
  }

  // does this work
  google.maps.event.addListener(map, 'click', function(event) {
     placeMarker(event.latLng);
  });



}

