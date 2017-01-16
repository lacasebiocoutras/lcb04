
date_publi_filter_on_collection : 


{% comment %}
<!-- test display on current page -->
{% assign array_dist_children_item_part = array_dist_children_item | remove_first: '|' | split: '|' %}

{% assign array_index_item_part = array_index_item | remove_first: '|' | split: '|' %}
{% assign array_index_item_size = array_index_item_part.size | minus: 1 %}
<p>array_index_size: {{array_index_size}}, size: {{array_index_item_size}}, array_index_item : {{array_index_item}}</p>
{% for i in (0..array_index_item_size) %}
  {% assign index = array_index_item_part[i] | plus: 0 %}
  {% assign dist_parent = array_dist_children_item_part[i] | plus: 0 %}
  {% assign item_tmp = raw_items[index] %}
  <p> i: {{i}},index: {{index}},dist_parent : {{dist_parent}}, {{type_date_ref}} : {{item_tmp.date-publication}},
    order: {{item_tmp.order}}, title: {{ item_tmp.title}} </p>

{% endfor %}
{% endcomment %}


{% comment %}
<!-- test time iteration -->
<p>
{% assign z-end = 0 %}
{% if include.urlref contains "/alimentation/marche-biologique/fruits-et-legumes/fruits/les-fraises-de-saison/fraises-aquitaine/fraises-du-Lot-et-garonne" %}
  include.urlref : {{include.urlref}}
  {% assign z-end = 0 %}
{% endif %}
</p>
{% for z in (0..z-end) %}
{% endfor %}
{% endcomment %}

marche bio
  fruitlegumes
    fruits
      les fraise de saison
      framboises


    legumes

    objec 

    34/2/2/33/3/1/45/4/1

    33/51/45/43

    34

