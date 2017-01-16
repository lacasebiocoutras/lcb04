// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    // 'baseUrl': '/lcb01/assets-js',
    'paths': {
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
      'headroom': 'vendor/headroom.0.8.0.min',
      // 'leaflet': 'vendor/leaflet',
      'd3': '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min',
      'topojson': '//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.20/topojson.min',
      'datamaps': 'vendor/datamaps.fra.0.5.1.min',
      'picturefill': 'vendor/picturefill.min',
      'throttle-debounce': 'plugin/jquery.ba-throttle-debounce.min',
      'modernizr': 'vendor/modernizr-custom.3.3.1'
      },
      shim: {
          // leaflet: {
          //     exports: 'L'
          // },
          'd3': {
            exports: 'd3'
          },
          'topojson': {
            deps: ['d3'],
            exports: 'topojson'
          },
          'datamaps': {
            deps: ['d3', 'topojson']
          },
          'throttle-debounce': {
            deps: ['jquery'],
            exports: 'throttle-debounce'
          }
          //,
          // 'modernizr': {
          //   explorts: 'Modernizr'
          // }

      }
});
//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js
// add leaflet (non AMD) + shim config, need plugin lib/jquery.leaflet.js
// and css non-critical.csss.scss : @import "lib/leaflet.scss";

requirejs(['app/common'], function () {
      requirejs(['app/main-default-ns-rejoindre']);
  });
