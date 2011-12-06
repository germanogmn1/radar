Logger = {
  log: function (msg) {
    document.querySelector('#log').innerHTML += msg + "\n";
  }
};

Map = (function(google) {
  function Map(targetElement, myPosition) {
    this.center = this.getPositionLatLnt(myPosition);
    
    var mapOptions = {
      zoom: 17,
      center: this.center,
      mapTypeControl: false,
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.ANDROID
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.googleMap = new google.maps.Map(targetElement, mapOptions);
    
    this.myMarker = new google.maps.Marker({
      position: this.center,
      map: this.googleMap,
      title: "Tu tá aqui!"
    });
  }
  
  Map.prototype.setMyPosition = function (position) {
    Logger.log("setMyPosition");
    this.center = this.getPositionLatLnt(position);
    this.myMarker.setPosition(this.getPositionLatLnt(position));
  };
  
  Map.prototype.getPositionLatLnt = function(position) {
    return new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  };
  
  return Map;
})(google);

(function (navigator) {
  Logger.log(window.innerWidth + " x " + window.innerHeight);
  var positionOptions, initMap, updateMap, error;
  
  positionOptions = {
    enableHighAccuracy: true
    //timeout , maximumAge
  }
  
  initMap = function(position) {
    var canvas = document.querySelector('#map');
    window.map = new Map(canvas, position);
    updateMap();
  };
  
  updateMap = function () {
    navigator.geolocation.watchPosition(function (p) {
      window.map.setMyPosition(p);
    }, error, positionOptions);
  };
  
  error = function(error) { Logger.log(error.message); };
  
  navigator.geolocation.getCurrentPosition(initMap, error, positionOptions);
})(navigator, document);