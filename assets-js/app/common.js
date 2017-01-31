define(['jquery','picturefill','responsive-nav','slidebars'], function($) {



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

    // Initialize Slidebars
    var controller = new slidebars();
    controller.init();

    // Toggle Slidebars
    // $( '.toggle-id-1' ).on( 'click', function ( event ) {
    $( '.js-toggle-main-menu' ).on( 'click', function ( event ) {
        
      // Stop default action and bubbling
      event.stopPropagation();
      event.preventDefault();

      // Toggle the Slidebar with id 'id-1'
      controller.toggle( 'id-1' );
    } );

    // var navigation1 = responsiveNav(".nav-1");
    // var navigation1 = responsiveNav(".nav-1", {
    //     animate: true,                    // Boolean: Use CSS3 transitions, true or false
    //     transition: 284,                  // Integer: Speed of the transition, in milliseconds
    //     label: "Menu",                    // String: Label for the navigation toggle
    //     insert: "after",                  // String: Insert the toggle before or after the navigation
    //     customToggle: "",                 // Selector: Specify the ID of a custom toggle
    //     closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
    //     openPos: "relative",              // String: Position of the opened nav, relative or static
    //     navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
    //     navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
    //     jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
    //     init: function(){},               // Function: Init callback
    //     open: function(){},               // Function: Open callback
    //     close: function(){}               // Function: Close callback
    // });
    //customToggle: "#toggle-nav1", 

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
