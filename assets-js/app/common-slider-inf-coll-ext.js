define(['jquery', 'config-module'], function($, config) {


  $(document).ready(function(){

    var class_slider=null;
    var id_item_slider=null;
    var nb_items_slider=0;

    var inputs=null;
    var flag_break=false;
    var nb_inputs=0;
    var delay = 0;
    var timeoutSlider=null;


    var moveSlider = function () {
      var $inputs = $(inputs);
      $inputs.each(function(index) {
        if ($(this).is( ':checked')) {
          if (!flag_break) {
            if (index === nb_inputs) {
              $inputs.eq(0).prop( 'checked', true );
            } else {
              $inputs.eq(index + 1).prop( 'checked', true );
            }
            $(this).prop( 'checked', false );
          }
          timeoutSlider=setTimeout(function(){moveSlider();},delay);
          return false;
        }
      });
    };

    // get json config then json with data, depending current url, then update display
    var url_page = window.location.href;
    var path_config=config.base_url.concat(config.json_slider_inf_coll_ext);
    var request_config = $.getJSON(path_config);

    var extract_config = request_config.then(function(loaded_config){
        // window.config=loaded_config.config;
        $.each(loaded_config.list, function(index, item){
          if(url_page.indexOf(item.url)>-1) {
            class_slider='.'.concat(item.class_slider);
            id_item_slider='#'.concat(item.id_item_slider);
            nb_items_slider=item.nb_items_slider;
            delay=item.delay_sec*1000;
            //write selector css form X > Y
            inputs=class_slider.concat(' > input');
            nb_inputs=nb_items_slider-1;
          }
        });
    });

    extract_config.done(function() {
      if (class_slider !== null) {
        $(class_slider).mouseleave(function() {
          flag_break=false;
          clearTimeout(timeoutSlider);
          timeoutSlider=setTimeout(function(){moveSlider();},delay);
        });
        $(class_slider).mouseenter(function() {
          flag_break=true;
        });
        timeoutSlider=setTimeout(function(){moveSlider();},delay);
      }
    });
  });
});
