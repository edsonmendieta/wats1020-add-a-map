$(document).ready(function(){
  
  $('a[data-toggle="tab"]').click(function (e) {
      e.preventDefault();
      $('a[href="' + $(this).attr('href') + '"]').tab('show');
  });
  
  
  $(function () {
  $('[data-toggle="popover"]').popover()
});
  
//   var map = L.map('map').setView([46.8529, 121.7604], 13);
  
 

 
//   var puyallup = L.marker([47.1758, 122.2936]).bindPopup('City of Puyallup. Home of the Puyallup Tribe.'),
//       tacoma    = L.marker([47.2414, 122.4594]).bindPopup('City of Tacoma. The City of Destiny.'),
//       mtRainier    = L.marker([46.852, -121.760]).bindPopup('Welcome to Mt. Rainier. This peak is 4,392 feet high.');
  
//   var locations = L.layerGroup([puyallup, tacoma, mtRainier]);
  



  
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
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
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
};
  
  
  
  
  var map = L.map('map-container').setView([46.852, -121.760], 8)
  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);  

  
  

  
 L.marker([46.852, -121.760]).addTo(map)
    .bindPopup('<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.')
    .openPopup();
  
  
 L.marker([47.1758, -122.2936]).addTo(map)
  .bindPopup('<b>City of Puyallup</b><br>Home of the Puyallup Tribe.')
  .openPopup();
  
  L.marker([47.2414, -122.4594]).addTo(map)
  .bindPopup('<b>City of Tacoma</b><br>The city of destiny.')
  .openPopup();
 


 
  
  


/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

});                                