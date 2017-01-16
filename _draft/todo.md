---
layout: null
---

assets plugin

config option ot env et prod

ajout  : 

liste derniers items consultés, last_5

formulaire contact

Nos partenaires, marques

agenda evenements
agenda arrivage, depot pain le vend..
agenda hebdo
 promotions

informations locales

tri items en fonction saison

article suivant, prec dans le rayon

autres : 

moteur recherche
tags : marque, label, .. recherche par tags

newsletter (tinyletter)

outil analytique, outil google search pr le site


collection_ext
 
  dans url, nom unique pour chaque element du chemin
  pas d'article avec nom : index.md



## where_exp
<!-- ko -->
{% assign collection =  site.collections_ext.list
  | where_exp : "item" , "item.title == name_collection"
%}
{% comment%}
<!-- ko -->
{% assign items = site.documents
  | where_contains : "path" ,"name_collection"
  | sort: "date" | reverse
%}
items.size(0) : {{items.size}}
{% endcomment%}


## date_event : 
griser par js les evenements passés


{% for collection in site.collections %}
  {% capture label %}{{ collection | first }}{% endcapture %}
  <h2>{{ label | capitalize }}</h2>

{% endfor %}



{% comment %}

{% if array_items_direct_desc_size < 50 %}


{% if sort_rev == true %}
  {% include coll_ext/array_utils/sort_array_2tab_max2min.html
  tab1ref=array_day_documents tab2=array_items_direct_desc %}
{% else %}
  {% include coll_ext/array_utils/sort_array_2tab_min2max.html
  tab1ref=array_day_documents tab2=array_items_direct_desc %}
{% endif %}

{% assign array_day_documents = tab1_sort%}
{% assign array_items_direct_desc = tab2_sort%}

{% endif %}
<p>{{item_tmp.date-publication}} diff_date: {{diff_date}}; mod_day : {{mod_day}}</p>


{% endcomment %}
