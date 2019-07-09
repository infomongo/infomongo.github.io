---
layout: default
title: 'About John Phillips'
description: 'John Phillips is a UX designer and writer who lives in Denver, CO.'
class: about
---

<section class="white" markdown="1">
	
<div class="">
   <img src="/img/about-me.jpg" alt="Photo of John Phillips on the banks of the Seine river in Paris" class="about float border">
</div>	
	
Hello. I’m John Phillips,  a UX designer and writer. [I have been designing products for more than fifteen years][ux].

Much of my work has been in [local search][loc]. I have designed store and ATM locators. I lead the design of an [Agent Locator for Nationwide Insurance][nw]. Before that, at Local Matters, I designed sites for many of the leading yellow page companies in Europe.

[ux]: /ux-design/
[w]: /posts/
[nw]: /ux-design/nationwide-locator
[loc]: /ux-design/map-pins

I [write about UX Design and other topics][w]. My latest post is 
{% for post in site.posts limit:1 %}<a href="{{ post.url}}">{{ post.title | escape }}</a>.{% endfor %} 

My most popular posts are 
{% for post in site.categories['popular'] limit:5 %}{% if forloop.last == true %} & {% endif %}<a href="{{ post.url}}">{{ post.title | escape }}</a>{% if forloop.last == true %}. {% else %}, 
{% endif %}{% endfor %}

Looking for help? Contact: <a href="&#x6D;&#97;&#105;l&#116;&#x6F;:&#106;&#111;&#x68;&#x6E;&#64;&#x69;&#x6E;f&#111;&#x6D;&#x6F;&#110;&#x67;&#111;&#46;&#x63;&#111;&#109;">&#106;&#111;&#x68;&#x6E;&#64;&#x69;&#x6E;f&#111;&#x6D;&#x6F;&#110;&#x67;&#111;&#46;&#x63;&#111;&#109;</a>

</section>