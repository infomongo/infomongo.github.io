---
layout: ux-detail
title: Map Pin Interaction 
description: A interaction detail used on local search sites
project-info: 'Map Interaction, 2005'
key-image: pin-menu-teaser.png
class: push
---

An interaction detail used on local search sites.

Most local search sites show a list of locations and a map. Each location is marked with a pin on the map. Frequently, the pins are pretty close together. The locations may be fairly close, or the map is at zoom level where they overlap.

**This makes clicking on a map pin more difficult.** 

It’s pretty common to show a 'balloon' with additional information when you click on a pin. But when they overlap, it can be difficult to target the pin you want. Often have have to zoom way in to click the right pin.

To avoid this, instead of showing the normal balloon, show a menu that lists the locations.

<div class="ux-img">
	<img src="/img/ux/pin-menu-crop.png">
</div>

This example is [from a web app][umb] created using the Placeable locator platform. But I first designed this interaction for Local Matters and we used it in the yellow page apps we built. *The font in this example is a little smaller than I'd like. Ideally the click targets would be bigger, and there'd be more space between them.*

The menu shows the location letters and names. Clicking a link shows the info for that location.

<div class="ux-img">
	<img src="/img/ux/pin-info-crop.png">
</div>

#### Other details: 

- The pins are labeled with letters instead of numbers. *Google was doing this on their maps back in 2004 or 2005*. If the pins are labeled with numbers, some clients will want to number the pins sequentially, with pins 1–10 on page one, 11–20 on page two, and etc. Showing two digits on the pins is awkward.

- The pins are layered in reverse order, pin A is on top of B and so on. The "natural" way to plot the pins results in the reverse. Pin A is at the bottom and pin E is on top.

[umb]: https://locations.umb.com/kansas-city-ks
