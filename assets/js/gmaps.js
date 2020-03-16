"use strict";
function initialize() {
  	var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: new google.maps.LatLng(4.6638593, -74.0638085),
      disableDefaultUI: true,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    }
    //Create map
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Create marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(4.6638593, -74.0638085),
      map: map,
      title: 'Ginger &amp; Bourbon',
      icon: 'assets/images/map-marker.png'
 	});

 	//Create ribbon
    var ribbon = new google.maps.Marker({
      position: new google.maps.LatLng(4.6638593, -74.0638085),
      map: map,
      icon: 'assets/images/map-ribbon.png'
 	});

    //Map marker info
    var contentString = '<div id="map-info">'+
      '<h2>Ginger &amp; Bourbon</h2>'+
      '<p style="text-align:left; margin:0;"><strong>Ginger &amp; Bourbon</strong>, has the <strong>best food</strong> delivery service in town, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores, incidunt quidem natus. Ut dolorum deleniti reiciendis tenetur illum, beatae cum, harum laborum, nisi omnis nulla laboriosam, ipsam nemo consectetur..</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores, incidunt quidem natus. Ut dolorum deleniti reiciendis tenetur illum, beatae cum, harum laborum, nisi omnis nulla laboriosam, ipsam nemo consectetur..</p>'+
      '</div>';

    //Add info to marker 
	var infowindow = new google.maps.InfoWindow({
	  content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

    //Keep map centered
    google.maps.event.addDomListener(window, 'resize', function() {
    	var center = map.getCenter();
    	google.maps.event.trigger(map, "resize");
    	map.setCenter(center); 
	});
  }
  google.maps.event.addDomListener(window, 'load', initialize);