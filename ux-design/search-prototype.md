---
layout: ux-detail
title: Local Search Prototype 
description: A prototype of local search app.
project-info: 'Brewery Finder Prototype, 2017'
class: push
---

A prototype of a local search app.

<iframe class="hide-mobile" src="https://moonsault.co/brewery-app-prototype/" width="375" height="667"></iframe>

<div class="hide-mobile" markdown="1">
	
At left is an iframe showing the prototype at a mobile size. It's interactive, click **Find Nearby** or **Enter A Location** to get started.

</div>

<a href="https://moonsault.co/brewery-app-prototype/" target="_blank">Open the prototype in a new window</a> 	

The app is a tool to help organize a brewery crawl *"on the fly."* It's a responsive app, but our main use case was mobile. To help you decide where to head next when you are out and about.

The main goal of this prototype was to get a feel for how it worked. To see if the interactions with the map pins were enough to draw your eye. When you click a location in the list, its map pin spins and enlarges.

### What We Learned

We discovered that the spinning map pins are too subtle. The animation is nice, but it's not enough to draw your eye. If we had built the app, we would have used a "balloon" on the map marking the location, which is more standard. Or we might have made another prototype to try out different animations.

The idea of the crawl is to get a group of people out on foot, on bikes or in a Lyft and hit two or three places. You want to get a sense of where each location is and how far apart they are. And the basic flow of the app supports this. You want to see multiple locations on a map, but still get a list of the names. 

If you do a search in Google or Apple maps on your phone, you often have to click on the map pins to see the location names. This can be a bit of a "wack-a-mole" interface. You end up clicking a bunch of pins to learn the location names. Or you end up in a list view, with the map gone, or too small to use. I wanted a design that combined a map with the list, and still fit on a mobile screen.

The prototype is pretty limited. It always shows the same set of results no matter where you search. And the map isn't interactive. You can't pan, zoom or click on pins. This would have all worked in the app. We didn't feel like we needed to test these in the prototype.

<div style="clear: left;"></div>

{% include ux-nav.md 
	prev-text="Tokens"
	prev-link="tokens"
	next-text="Nationwide Locator"
	next-link="nationwide-locator"
 %}
 