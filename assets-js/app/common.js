define(['jquery','picturefill'], function($) {



  $(document).ready(function(){


    //adapt header-nav:hover with on-click
    // $('.header-nav').removeClass('header-nav_hover');
    // $('.header-nav').click( function() {
    //   var hN=$('.header-nav'),
    //       sHnh='header-nav_hover';
    //   if(hN.hasClass(sHnh)) {
    //     hN.removeClass(sHnh);
    //   } else {
    //     hN.addClass(sHnh);
    //   }
    // });

    // $('body').click(function(e) {
    //   // e.preventDefault();
    //   var parent= $(e.target).parent('.header-nav');
    //   if(parent && parent.length>0) {
    //     //console.log("clic sur zone menu");
    //     return;
    //   }
    //   //test supplem temp : 1er click parent header-nav n'est pas remonté !
    //   parent=$(e.target).parent('.header-nav-menu');
    //   if (parent && parent.length>0) {
    //     return;
    //   }

    //   var hN=$('.header-nav'),
    //   sHnh='header-nav_hover';
    //   if(hN.hasClass(sHnh)) {
    //     hN.removeClass(sHnh);
    //   }
    // });
    //fin adapt header-nav:hover with on-click



    // if ( !History.enabled ) {
    //      // History.js is disabled for this browser.
    //      // This is because we can optionally choose to support HTML4 browsers or not.
    //     return false;
    // }



  });


  (function() {
    'use strict';

    document.createElement('picture');

    /* Flexbox supported ?*/
    var supports = {};
    var style = document.body.style;
    var flexbox = function() {
      return supports.flexbox || (supports.flexbox = ('flexBasis' in style ||
          'msFlexAlign' in style || 'webkitBoxDirection' in style));
    };
    if (!flexbox()) {

      var div = document.createElement('div');
      div.className = 'Error';
      div.innerHTML = 'Your browser does not support Flexbox. Parts of this site may not appear as expected.';

      document.body.insertBefore(div, document.body.firstChild);
    }
  })();


});
