$(document).ready(function() {
	
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

	
	// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
	// tiles served through the MapQuest CDN. Consult this example to set up
	// the map tiles layers:
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

	var map = L.map('map-container').setView([46.852, -121.760], 13);

	L.control.layers(mapLayers).addTo(map);
	satLayer.addTo(map);

	// TODO: Customize that Map to show markers with popups at no fewer than 3
	// interesting locations. (You'll need to figure out the latitude/longitude for
	// these locations using a mapping tool such as Google Maps.)
	
	var marker1 = L.marker([46.853765, -121.760203]).addTo(map);
	marker1.bindPopup("This is <b>Columbia Crest</b>.<br> It is the highest summit of Mt. Rainier at 14,411 feet high.");
	
	var marker2 = L.marker([46.846645, -121.767511]).addTo(map);
	marker2.bindPopup("This is <b>Point Success</b>.<br> It is second highest summit at 14,158 feet high.");
	
	var marker3 = L.marker([46.849891, -121.711974]).addTo(map);
	marker3.bindPopup("This is <b>Little Tahoma Peak</b>.<br> This peak is 11,138 feet high.");
	
	// Opens a tab if it's not active, and adds smooth scroll	
	$('a.js-link-scroll').on('shown.bs.tab', function (e) {
   		$('#tabs .active').removeClass('active');
   		$('a[href="'+$(this).attr('href')+'"]').parent().addClass('active');
   	 		var that = this;
   	 		$('html, body').animate({
   	     	scrollTop: $( $(that).attr('href') ).offset().top
   	 		}, 800);
	});	
	
});


