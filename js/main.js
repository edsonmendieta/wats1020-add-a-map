$(document).ready(function(){
  
  
  
  	$('a[href^="#"]').on('click',function (e) { //smooth scrolling to internal links
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
  
  
  
  
  $('a[data-toggle="tab"]').click(function (e) { //toggles About section tabs from drop-down nav menu at top of page.
      e.preventDefault();
      $('a[href="' + $(this).attr('href') + '"]').tab('show');
  });
  
  
  $(function () {
  $('[data-toggle="popover"]').popover() //activates Bootstrap popover button feature
});
  

  
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; //leaflet layers
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});
  
  var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var mapLayers = {
    "Map View": drawLayer,
    "Open Street Maps": osm,
    "Satellite": satLayer
};
  
  
  
  
  var map = L.map('map-container').setView([46.852, -121.760], 7)
  L.control.layers(mapLayers).addTo(map);
  drawLayer.addTo(map);  //default layer shown

  
  

  
 L.marker([46.852, -121.760]).addTo(map) //map markers
    .bindPopup('<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.')
    .openPopup();
  
  
 L.marker([47.1758, -122.2936]).addTo(map)
  .bindPopup('<b>City of Puyallup</b><br>Home of the Puyallup Tribe.')
  .openPopup();
  
  L.marker([47.2414, -122.4594]).addTo(map)
  .bindPopup('<b>City of Tacoma</b><br>The city of destiny.')
  .openPopup();
 


 
  
  


});                                