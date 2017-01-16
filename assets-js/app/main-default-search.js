// define(['jquery','lunr','moment', 'content-expirator', 'jquery.alpha', 'jquery.beta'], function($,lunr,moment) {
define(['jquery', 'lunr', 'moment','config-module'], function($, lunr, moment, config) {



  // Custom tokenizer lunr : accent filter
  var myCustomTokenizer = function (obj) {

    if (!arguments.length || obj === null || obj === undefined) { return []; }
    if (Array.isArray(obj)) {
      return obj.map(function (t) {
        return lunr.utils.asString(t).toLowerCase();
      });
    }
    var objTmp = obj.toString().trim().toLowerCase().split(lunr.tokenizer.seperator);
    $.each(objTmp, function(index,token) {
      var nouvelleStr=token.replace(/à/gi,'a').replace(/â/gi,'a').replace(/ç/gi,'c')
        .replace(/é/gi,'e').replace(/è/gi,'e').replace(/ê/gi,'e')
        .replace(/î/gi,'i').replace(/ô/gi,'o').replace(/ù/gi,'u').replace(/û/gi,'u');
      // update output
      objTmp[index]=nouvelleStr;
    });
    return objTmp;
  };
  // registering the tokenizer is only required if the index needs to be serialised using toJSON
  lunr.tokenizer.registerFunction(myCustomTokenizer, 'myCustomTokenizer');

  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  window.idx = lunr(function () {

    // use the language (fr)
    this.pipeline.reset(); //https://github.com/olivernn/lunr.js/issues/122
    // this.use(lunr.fr);

    // custom tokenizer fr accent
    this.tokenizer(myCustomTokenizer);

    // then, the normal lunr index initialization
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('author');
    this.field('category');
    this.field('tags');
  });





  //global def display
   moment.locale('fr');
  var space = ' ';
  var emptychar='';
  var category=emptychar;
  var $search_results = $('#search_results');
  var format=['DDMMMMY'];

  function escapeString(stringHtml) {
    return String(stringHtml).replace(/&amp;/g, '&');
    // /&amp;|&amp;|&amp;/gi
  }

   function validePeriodDate(_date_deb, _date_fin,_format) {

    var dateDebut;
    if (_date_deb.length > 0) {
      dateDebut = moment(_date_deb, _format);
    }
    else {
      dateDebut = moment();
    }
    var dateFin;
    if (_date_fin.length > 0) {
      dateFin = moment(_date_fin, _format);
    }
    else {
      dateFin = moment();
    }
    var compDeb = moment(dateDebut).subtract(1,'days');
    var compFin = moment(dateFin).add(1,'days');

    if(moment().isBetween(compDeb.format(), compFin.format())) {
          return true;
    }
    else {
      return false;
    }


  }



   /*functions display*/
  var noResultSearch='<li>Pas de résultat trouvé</li>';

  var emptyDisplayAllId = function() {
    // Wait for data to load
    window.data.then(function(loaded_data) {
      $.each(loaded_data, function(index,value){
        var name_id='#';
        name_id=name_id.concat(value.name_id);
        $(name_id).addClass(window.config.class_invisible_search);
      });
    });
    return;
  };

  var displayAllId = function() {

    // Wait for data to load
    window.data.then(function(loaded_data) {
      $.each(loaded_data, function(index,value){
        var name_id='#';
        name_id=name_id.concat(value.name_id);
        //add moment filter
        if(validePeriodDate(value.date_debut,value.date_fin,format)) {
          $(name_id).removeClass(window.config.class_invisible_search);
        }
        else {
          $(name_id).addClass(window.config.class_invisible_search);
        }
      });
    });
    return;
  };

  var displayAnId = function(item) {
    moment.locale('fr');
    var name_id='#';
    name_id=name_id.concat(item.name_id);
    //add moment filter
    if(validePeriodDate(item.date_debut,item.date_fin,format)) {
      $(name_id).removeClass(window.config.class_invisible_search);
    }
    else {
      $(name_id).addClass(window.config.class_invisible_search);
    }
    return;
  };

  var updateDisplayAllId = function(results) {

    var pref_name_id='#';
    var name_id;
    var flag_display=false;
    // Wait for data to load
    window.data.then(function(loaded_data) {
      $.each(loaded_data, function(index,raw_item){

        var raw_name_id=raw_item.name_id;
        var filter_item=true;

        results.forEach(function(result) {
          var _ref = result.ref;
          var item = loaded_data[_ref];

          // if (item.name_id === raw_item.name_id) {
          if (item.name_id === raw_name_id) {
            filter_item=false;
          }
        });
        name_id=pref_name_id.concat(raw_name_id);
        //add moment filter
        // var dateDebut = moment(raw_item.date_debut, format);
        // var dateFin = moment(raw_item.date_fin, format);
        // var compDeb = moment(dateDebut).subtract(1,'days');
        // var compFin = moment(dateFin).add(1,'days');

        // if (! moment().isBetween(compDeb.format(), compFin.format())) {
        if(!validePeriodDate(raw_item.date_debut,raw_item.date_fin,format)) {
          filter_item=true;
        }
        if (filter_item === true) {
          $(name_id).addClass(window.config.class_invisible_search);
        }
        else {
          $(name_id).removeClass(window.config.class_invisible_search);
          flag_display=true;
        }
      });
    });

    if (flag_display === false) {
      $search_results.html(noResultSearch);
    }
    return;
  };



  function display_search_results(results) {
    // Are there any results?
    if (results.length) {
      $search_results.empty(); // Clear any old results
      updateDisplayAllId(results);

    } else {
       $search_results.html(noResultSearch);
       emptyDisplayAllId();
    }
  }



  // get json config then json with data, depending current url, then update display first
  var url_page = window.location.href;
  var path_config=config.base_url.concat(config.json_search_config);
  var request_config = $.getJSON(path_config);
  var extract_config = request_config.then(function(loaded_config){
    window.config=loaded_config.config;
    var name_current_search=null;
    $.each(loaded_config.list, function(index, item){
      if(url_page.indexOf(item.url)>-1) {
        name_current_search=item.name;
      }
    });
    return name_current_search;
  });
  var form_path_json = extract_config.then(function(name_search) {
    return config.base_url.concat(name_search);
  });
  var accessJson = form_path_json.then(function(path_ref) {
    window.data = $.getJSON(path_ref);
    window.data.then(function(loaded_data){
      $.each(loaded_data, function(index, value){
        window.idx.add(
          $.extend({ 'id': index }, value)
        );
        // update display
        displayAnId(value);
      });
    });

  });

  // extract_config.done( function(data) {
  //   console.log("data: " +data);
  // });

  // window.config.then(function(loaded_config){

  //   $.each(loaded_config, function(index, item){
  //     if(url_page.indexOf(item.url)>-1) {
  //       console.log("detect config : "+item.name);
  //       name_file_json = item.name;
  //     }
  //   });
  // });
  // var name_file_json_ref = config.json_default_promotions;
  // path_json=path_json.concat('.json');
  // // Download the data from the JSON file we generated
  // window.data = $.getJSON(path_json);
  // // Wait for the data to load and add it to lunr
  // window.data.then(function(loaded_data){

  //   $.each(loaded_data, function(index, value){
  //     window.idx.add(
  //       $.extend({ 'id': index }, value)
  //     );
  //     // update display
  //     displayAnId(value);
  //   });
  // });


  // add event to html element

  $('.catSearchShowAll').bind('click', function () {
    $('#search_box').val('');
    category=emptychar;
    $(this).parents().find('.termSearch').css('color','black');
    displayAllId();
  });

  $('.catSearch').bind('click', function () {
    // event.preventDefault();
    var select= $(this).parent().find('.termSearch');
    /* update category search */
    var category_html=select.html();
    // console.log(category);
    category_html=escapeString(category_html);
    // add delim to disciminate categories with partial name similar
    category=window.config.add_delim_categorie_search;
    category=category.concat(category_html);
    category=category.concat(window.config.add_delim_categorie_search);
    // console.log(category);
    // test :  E*n/t()re-ti^e$n?.; &amp; pr+o!du%it@°=|~&amp;s_, mé"n[]a gers
    // return  E*n/t()re-ti^e$n?.;     & pr+o!du%it@°=|~    &s_, mé"n[]a gers
    /*update selected element style*/
    $(this).parents().find('.termSearch').css('color','black');
    select.css('color','red');
    /*update search box*/
    $('#search_box').val('');
    /*display result*/
    var results = window.idx.search(category); // Get lunr to perform a search
    display_search_results(results); // Hand the results off to be displayed and store in Json format
  });

  // Event when the form is submitted : tmp show All
  // $('#site_search').submit(function(){
  //     // event.preventDefault();
  //     $('#search_box').val('');
  //     category=emptychar;
  //     displayAllId();
  // });

  var debounce = function (fn) {
    var timeout;
    return function () {
      var args = Array.prototype.slice.call(arguments),
          ctx = this;

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.apply(ctx, args);
      }, 100);
    };
  };




  $('#search_box').bind('keyup', debounce(function () {

    var query = $(this).val();
    var results;
    //cas no category selected, no search : display all
    if (query === emptychar) {

      if (category === emptychar) {
        displayAllId();

      } else {
        results = window.idx.search(category); // Get lunr to perform a search
        display_search_results(results);
      }

    } else { //if (query.length > 1) {
      if(category!==emptychar){
        query=query.concat(space,category);
      }
      results = window.idx.search(query);
      display_search_results(results);
    }
  }));




});
