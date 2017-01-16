// define(['jquery','lunr','moment', 'content-expirator', 'jquery.alpha', 'jquery.beta'], function($,lunr,moment) {
// define(['jquery','slick', 'sticky', 'content-expirator', 'throttle-debounce'], function($) {
define(['jquery', 'lib/content-expirator', 'config-module'], function($) {

  // Sticking on asides
  // var statePrecRight;
  // var statePrecLeft;
  // var stickyAsidesInit = function() {

  //   $('.sticky-aside-right').sticky({topSpacing:50, responsiveWidth:true,getWidthFrom:'Site-right-aside'});
  //   $('.sticky-aside-left').sticky({topSpacing:50, responsiveWidth:true,getWidthFrom:'Site-left-aside'});

  //   statePrecRight=$('.Site-content-right-aside').css('flex-direction');
  //   if(statePrecRight === 'column') {
  //     $('.sticky-aside-right').unstick();
  //   }
  //   statePrecLeft=$('.Site-main').css('flex-direction');
  //   if(statePrecLeft === 'column') {
  //     $('.sticky-aside-left').unstick();
  //   }
  // };

  // var stickyAsidesUpdate = function() {
  //   var directionRight=$('.Site-content-right-aside').css('flex-direction');
  //   if(directionRight !== statePrecRight) {
  //     if (directionRight ==='row') {
  //       $('.sticky-aside-right').sticky({topSpacing:50, responsiveWidth:true,getWidthFrom:'Site-right-aside'});
  //     } else {
  //       $('.sticky-aside-right').unstick();
  //     }
  //     statePrecRight=directionRight;
  //   }

  //   var directionLeft=$('.Site-main').css('flex-direction');
  //   if(directionLeft !== statePrecLeft) {
  //     if (directionLeft ==='row') {
  //       $('.sticky-aside-left').sticky({topSpacing:50, responsiveWidth:true,getWidthFrom:'Site-left-aside'});
  //     } else {
  //       $('.sticky-aside-left').unstick();
  //     }
  //     statePrecLeft=directionLeft;
  //   }
  // };

//voir : http://kenwheeler.github.io/slick/
//       https://github.com/kenwheeler/slick/
  // var slickPresentationInit = function() {

  //   $('#slider-presentation').slick({
  //     accessibility: false,
  //     arrows: false,
  //     respondTo: 'min',
  //     dots: true,

  //     // normal options...
  //     infinite: true,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     // the magic
  //     responsive: [
  //       {
  //         breakpoint: 10000,
  //         settings: {
  //           slidesToShow: 1,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 800,
  //         settings: {
  //           slidesToShow: 1,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 80,//voir ajout padding 2em
  //         settings: 'unslick' // destroys slick, a reactiver si sup !! passage paysage portrait TODO
  //       }
  //     ] //fin responsive
  //   });
  // };

  // var slickPresentationResize = function() {
  //   //redim slider responsive
  //   var calcWidth= $('.Site-content').width();
  //   var asideRight= $( '.Site-right-aside' );
  //   if(asideRight.css('order')==='0') {
  //     calcWidth-= asideRight.width();
  //   }
  //   $('#slider-presentation').width(calcWidth);
  // };

  // -----------------------------
  // Ready event
  $(document).ready(function(){

    //load evenements on left aside
    // var path_json = require('config-module').base_url;
    // path_json=path_json.concat('evenement.json');
    // $('.Site-left-aside').loadEvenements(path_json);

    //gestion date fermeture on right aside
    var path_json = require('config-module').base_url;
    path_json=path_json.concat('fermeture.json');
    $('.Site-right-aside').loadFermetures(path_json);

    //init sticky asides
    // stickyAsidesInit();

    // //init slider presentation, page d'acceuil
    // var dfd = $.Deferred();
    // dfd.done(slickPresentationResize);
    // dfd.done(slickPresentationInit);
    // dfd.done(function() {
    //   // $('.slider-item').removeClass('invisible');
    // });
    // dfd.resolve();
  });

  // -----------------------------
  // Resize event with throttle
  // from : http://benalman.com/projects/jquery-throttle-debounce-plugin/
  // function resizeThrottle() {
  //   //redim slider responsive
  //   // slickPresentationResize();
  //   //unstick on asides when containers are on flex-direction column
  //   stickyAsidesUpdate();
  // }
  // $(window).resize( $.throttle( 250, resizeThrottle ) );





});
