---
layout: default
title: 'Infomongo: The UX Design Portfolio of John Phillips'
description: 'John Phillips is a UX designer and writer who lives in Denver, CO.'
css-include: 
   - home.css
redirect_from: /ux-design/
class: home
---


<section class="dark wrap" markdown="1">
<div class="intro" markdown="1">

# this is infomongo

I'm [John Phillips](/about/). I design software for people.  
Tools that work as expected.  

</div> 
</section>

<section class="white">
<div class="recent">
<h4 class="lite">Latest Post</h4>
{% for post in site.categories['featured'] limit:1 %}
<h2><a href="{{ post.url}}">{{post.title}}</a></h2>
{{ post.excerpt }}<a href="{{ post.url}}">more…</a>
{% endfor %}
</div>
</section> 


<section class="white" markdown="1">
<div class="portfolio" markdown="1">
   
## Featured Projects

### [An Oil &amp; Gas Search Application][1]
[![Alt text](/img/portfolio/cover-new-oil-gas.png)][1]
desktop app, built with [electron](https://www.electronjs.org)
<div class="meta">
user research, interaction design, wireframes
</div>

### [Empower Retirement][2]
[![Alt text](/img/portfolio/cover-new-empower.png)][2]
website redesign
<div class="meta">
interaction design, information architecture, wireframes
</div>

### [Physician Locator][3]
[![Alt text](/img/portfolio/cover-new-physician-locator.png)][3]
mobile first web app
<div class="meta">
interaction design, information architecture, wireframes
</div>

[1]: /ux-design/oil-and-gas-search/
[2]: /ux-design/empower-retirement/
[3]: /ux-design/physician-locator/

<h4 class="lite">More Projects</h4>

- [Nationwide Locator](/ux-design/nationwide-locator/)
- [Map Pin Interaction](/ux-design/map-pins/)
- [Placeable Workbench](/ux-design/workbench/)

</div>
</section>

