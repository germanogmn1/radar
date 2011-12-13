/*jslint browser: true, indent: 2*/
/*globals Map*/

var stubPos = {
  coords: {
    latitude: -30.051716,
    longitude: -51.097310
  }
};

var Logger = {
  log: function (msg) {
    console.log(msg);
    alert(msg);
  }
};

(function () {
  "use strict";
  window.map = undefined;
  var init, canvas;
  
  var handle = function (pos) {
    console.log(pos);
    
    if (map) {
      map.setMyPos(pos);
    } else {
      canvas = document.querySelector('#map');
      map = new Map(canvas, pos);
    }
  };
  
  var error = function (error) {
    window.lastError = error;
    Logger.log(error.message);
  };
  
  navigator.geolocation.watchPosition(handle, error, {
    enableHighAccuracy: true
  });
}());
