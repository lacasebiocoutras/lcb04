// define(['jquery', 'jquery.leaflet', 'jquery.datamaps'], function($) {
// define(['jquery', 'd3', 'jquery.datamaps','modernizr'], function($,d3) {
define(['jquery', 'd3','modernizr', 'lib/jquery.datamaps'], function($,d3) {


  $(document).ready(function(){

    //leaflet osm
    // $('#map-1').osml();
    // console.log(Modernizr);
    // This should log the Modernizr function

    //For Example
    if(Modernizr.serviceworker){
      // Do something here
      console.log('service worker available!');
    }

    //initialisation datamaps
    $('#container-datamaps').datamaps({

      scope: 'fra',
      setProjection: function(element) {
        var projection = d3.geo.mercator()
          .center([6.8, 46.5])
          .rotate([4.4, 0])
          .scale(element.offsetWidth*4)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        var path = d3.geo.path()
          .projection(projection);

        return {path: path, projection: projection};
      },
      fills: {
        defaultFill: '#C8E6C9',
        roi: '#388E3C'
      },
      data: {
        'FR.CO': {fillKey: 'roi' },
        'FR.HM': {fillKey: 'roi' },
        'FR.HN': {fillKey: 'roi' },
        'FR.VG': {fillKey: 'roi' }
      }
      //responsive: true
      // bubblesConfig: {
      //   borderWidth: 2,
      //   borderColor: '#4c4c4c',
      //   popupOnHover: false,
      //   radius: null,
      //   popupTemplate: function(geography, data) {
      //   return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
      //   },
      //   fillOpacity: 0,
      //   animate: true,
      //   highlightOnHover: false,
      //   highlightFillColor: '#FC8D59',
      //   highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
      //   highlightBorderWidth: 2,
      //   highlightFillOpacity: 0,
      //   exitDelay: 100,
      //   key: JSON.stringify
      // }

    });

    //validé fra :
     // scope: 'fra',
      // setProjection: function(element) {
      //   var projection = d3.geo.mercator()
      //     .center([6.8, 46.5])
      //     .rotate([4.4, 0])
      //     .scale(element.offsetWidth*4)
      //     .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

      //   var path = d3.geo.path()
      //     .projection(projection);

      //   return {path: path, projection: projection};
      // },
      // fills: {
      //   defaultFill: '#C8E6C9',
      //   roi: '#388E3C'
      // },
      // data: {
      //   'FR.CO': {fillKey: 'roi' },
      //   'FR.HM': {fillKey: 'roi' },
      //   'FR.HN': {fillKey: 'roi' },
      //   'FR.VG': {fillKey: 'roi' }

      // }

  });

  // $( window ).resize(function() {

  // });



});
