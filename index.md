---
layout: default
title: 'infomongo: the online home of john phillips'
description: The portfolio site of John Phillips, a UX designer located in Denver, CO.
css-include: 
   - home.css
---

<header>
   <nav>
     <a href="/" class="active">Infomongo</a>
     <a href="/#design">UX Design</a>
     <a href="/posts/">Writing</a>
   </nav>
</header>

<section class="white" markdown="1">
   <div class="intro" markdown="1">
Hello. I’m John Phillips,  a UX designer and [writer][w]. [I have been designing products][ux] for more than fifteen years.

I work at [Moonsault][moon], a consultancy I started with a couple of partners. Before that, I worked at [Placeable][place], Local Matters & [Quark][quark]

[ux]: /ux-design/
[w]: /posts/

[moon]: https://moonsault.co
[place]: http://placeable.com
[quark]: http://quark.com

   </div>
   <div class="text" markdown="1">
I write about UX Design and other topics. My lastest post is 
{% for post in site.posts limit:1 %}<a href="{{ post.url}}">{{ post.title | escape }}</a>.{% endfor %} 

My most popular posts are 
{% for post in site.categories['popular'] limit:3 %}{% if forloop.last == true %} & {% endif %}<a href="{{ post.url}}">{{ post.title | escape }}</a>{% if forloop.last == true %}. {% else %}, 
{% endif %}{% endfor %}

Contact: <a href="&#x6D;&#97;&#105;l&#116;&#x6F;:&#106;&#111;&#x68;&#x6E;&#64;&#x69;&#x6E;f&#111;&#x6D;&#x6F;&#110;&#x67;&#111;&#46;&#x63;&#111;&#109;">&#106;&#111;&#x68;&#x6E;&#64;&#x69;&#x6E;f&#111;&#x6D;&#x6F;&#110;&#x67;&#111;&#46;&#x63;&#111;&#109;</a>

   </div>
</section>