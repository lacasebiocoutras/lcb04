---
layout: search
permalink: /promotions/
title: "Nos promotions"
---
<!--fin-excerpt-->


{% comment %}
  {% include coll_ext_search/display.html %}
  integrated here with design page, specific layout search
{% endcomment %}

{% comment %}<!-- <aside class="Site-left-aside u-textLeft ">
      </aside> -->{% endcomment %}

<div class="Site-content-right-aside">

  <div class="Site-content">
    <div class="default-page-content">
      {% assign home_title = site.title | prepend: "Acceuil&nbsp;" %}
      {% include coll_ext_utils/path-navig-title.html 
        title=home_title 
        class_logo="logo-back"
      %}        

      <div class="content">       

        {% for list in site.data.coll_ext.model_search.list-model-search %}
          {% if list.id == 'recherche-promotions' %}
            {% include coll_ext_utils/list-detail-items_init_step.html %}
            {% include coll_ext/main.html
              force_page_ref_input=true
            %}
          {% endif %}
        {% endfor %}
      </div>{% comment %}<!-- fin content -->{% endcomment %}

    </div>{% comment %}<!-- fin default-page-content -->{% endcomment %}
  </div>{% comment %}<!-- fin Site-content -->{% endcomment %}

  
  <aside class="Site-right-aside ">
    <div class="sticky-aside-right">

    <form action="" id="site_search">
      <input type="search" id="search_box" placeholder="Que recherchez vous?" autocomplete="off">
    </form>
    {% for list in site.data.coll_ext.model_search.list-model-search %}
      {% if list.id == 'categorie-recherche-promotions' %}

        {% assign title_search = list.title  %}
        <button class="catSearchShowAll">
          <h3 class="termSearch">{{title_search}}</h3>
        </button>

        {% include coll_ext_utils/list-detail-items_init_step.html %}
        {% include coll_ext/main.html
          force_page_ref_input=true
          force_display_no_details=true
        %}
      {% endif %}
    {% endfor %}
    </div>
  </aside>
  
</div> {% comment %}<!-- fin Site-content-right-aside -->{% endcomment %}
