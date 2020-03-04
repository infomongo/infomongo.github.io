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
	
Hello. I’m John Phillips, a UX designer and writer. [I have been designing products for more than fifteen years][ux]. I have designed web and mobile apps, and even desktop software. I got started doing UX design for [Quark][q], back when people used QuarkXPress. *(That was back when software was actively murdering capitalization.)*

Much of my work has been in [local search][loc]. I have designed store and ATM locators. I lead the design of an [Agent Locator for Nationwide Insurance][nw]. Before that, at Local Matters, I designed sites for many of the leading yellow page companies in Europe.

My [LinkedIn profile][li] shows my work history and recommendations.

[li]: https://www.linkedin.com/in/johnphillipsdenver/
[ux]: /
[w]: /posts/
[nw]: /ux-design/nationwide-locator
[loc]: /ux-design/map-pins
[q]: http://www.quark.com

[I write about UX Design and other topics][w]. My latest post is 
{% for post in site.posts limit:1 %}<a href="{{ post.url}}">{{ post.title | escape }}</a>.{% endfor %} 

My most popular posts are 
{% for post in site.categories['popular'] limit:5 %}{% if forloop.last == true %} & {% endif %}<a href="{{ post.url}}">{{ post.title | escape }}</a>{% if forloop.last == true %}. {% else %}, 
{% endif %}{% endfor %}



## Contact  

You can reach me at
<a href="&#x6D;&#97;&#105;l&#116;&#x6F;:&#106;&#111;&#x68;&#x6E;&#64;&#x69;&#x6E;f&#111;&#x6D;&#x6F;&#110;&#x67;&#111;&#46;&#x63;&#111;&#109;">&#106;&#111;&#x68;&#x6E;&#64;&#x69;&#x6E;f&#111;&#x6D;&#x6F;&#110;&#x67;&#111;&#46;&#x63;&#111;&#109;</a>. As long as you aren't a Nigerian Prince who needs help with a wire transfer, I will respond within a couple of days.

</section>