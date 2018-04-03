---
layout: ux-detail
title: Map ‘Balloon’ Interaction 
description: A interaction detail used on local search sites
project-info: 'Map Interaction, 2005'
key-image: pin-menu-teaser.png
class: push
---

An interaction detail used on local search sites.

On a local search site, typically there is a list of results and map showing the locations. Each location gets a pin marking it’s location. Frequently, the pins are pretty close together. The locations may be fairly close, or the map maybe shown at zoom level where they overlap.

**This makes clicking on a map pin more difficult.** 

It’s pretty common to show a ’balloon’ with additional information when the user clicks on a pin. But when they overlap, it can be difficult to target the pin you want. Often the user will have to zoom way in to be able to click the pin they want.

To avoid this, instead of showing the normal balloon, show a menu that lists the locations.

<div class="ux-img">
	<img src="/img/ux/pin-menu-crop.png">
</div>

This example is [from a web app][umb] created using the Placeable locator platform. But I first designed this interaction for Local Matters and we used it in the yellow page apps we built. *The font in this example is a little smaller than I'd like. Ideally the click targets would be bigger, and there'd be more space between them. There's always room for improvement.*

The menu shows the location letters and names. Clicking a link shows the info for that location.

<div class="ux-img">
	<img src="/img/ux/pin-info-crop.png">
</div>

### Other details: 

- The pins are labeled with letters instead of numbers. *Google was doing this on their maps back in 2004 or 2005*. If the pins are labeled with numbers, some clients will want to number the pins sequentially, with pins 1–10 on page one, 11–20 on page two. This is awkward because the pins need to be big enough to show two digits.

- The pins are layered in reverse order, pin A is on top of B and so on. The "natural" way to plot pins, results in the reverse, with pin A at the bottom, and pin E on top.

[umb]: https://locations.umb.com/kansas-city-ks
