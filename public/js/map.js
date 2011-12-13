/*jslint browser: true, indent: 2*/
/*globals google*/

var Map = (function () {
  function Map(targetElement, myPos) {
    this.googleMap = this.createGoogleMap(targetElement, myPos);
    this.setMyPos(myPos);
  }
  
  Map.prototype.setMyPos = function (pos) {
    var myLatLng = this.getPosLatLng(pos);
    this.googleMap.setCenter(myLatLng);
    
    if (this.myMarker) {
      this.myMarker.setPosition(myLatLng);
    } else {
      this.myMarker = new google.maps.Marker({
        map: this.googleMap,
        position: myLatLng,
        icon: 'img/person.png'
      });
    }
  };
  
  Map.prototype.setBuddyPos = function (pos) {
    var buddyLatLng = this.getPosLatLng(pos);
    
    if (this.buddyMarker) {
      this.buddyMarker.setPosition(buddyLatLng);
    } else {
      this.buddyMarker = new google.maps.Marker({
        map: this.googleMap,
        position: buddyLatLng
      });
    }
  };
  
  Map.prototype.createGoogleMap = function (canvas) {
    var mapOptions = {
      zoom: 12,
      disableDefaultUI: true,
      
      navigationControl: true,
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.SMALL
      },
      
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
      },
      
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    return new google.maps.Map(canvas, mapOptions);
  };
  
  Map.prototype.getPosLatLng = function (pos) {
    return new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
  };
  
  return Map;
}());
