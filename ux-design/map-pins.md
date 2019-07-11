---
layout: portfolio
title: Map Pin Interaction 
description: A interaction detail used on local search sites
---

<section class="white post" markdown="1">
<div class="text" markdown="1">
	
# Map Pin Interaction

<p class="meta">An interaction detail used on local search sites.</p>

Most local search sites plot locations on a map. Each location is marked with a pin. Usually clicking a pin displays a "balloon" with more information about the location.

Frequently, the pins are pretty close together. The locations may be close, or the map might be zoomed out enough that they overlap. 

<div class="">
	<img src="/img/ux/pin-menu-teaser.png" class="full-width border">
	<p class="caption">overlapping map icons can be hard to target</p>
</div>

</div>
</section>	
<section class="dark post" markdown="1">
<div class="text" markdown="1">

## The Problem?

When the map pins are close together, **it's difficult to click the one you want**. Often you have have to zoom in to click the right pin.

</div>
</section>	

<section class="white post" markdown="1">
<div class="text" markdown="1">

## The Fix 

Instead of showing the normal balloon, show a menu that lists all the locations that overlap.

<div class="">
	<img src="/img/ux/pin-menu-crop.png" class="full-width border">
	<p class="caption">menu listing overlapping locations</p>
</div>


This example is [from a web app][umb] created using the Placeable locator platform. But I first designed this interaction for Local Matters and we used it in the yellow page apps we built. *(The font in this example is a little smaller than I'd like. Ideally the click targets would be bigger, and there'd be more space between them.)*

[umb]: https://locations.umb.com/kansas-city-ks

The menu shows the location letters and names. Clicking a link shows the info for that location.

<div class="">
	<img src="/img/ux/pin-info-crop.png" class="full-width border">
	<p class="caption">menu location info</p>
</div>

### Other Details 

- The pins are labeled with letters instead of numbers. *(I first saw Google do this in 2003 or 2004.)* If the pins are labeled with numbers, some clients will want to number the pins sequentially, with pins 1–10 on page one, 11–20 on page two, and etc. Showing two digits on the pins is awkward.

- The pins are layered in reverse order, pin A on top of B. If the pins are added in the "natural" way, with pin A added first, followed by B and all the others, then A will end ends up at the bottom. Each new pin added it higher up the stack. *(This is true for the Google Maps API, and every other mapping API I have used.)* It works better to loop thru them in reverse order. This puts A on to of B.

</div>
</section>	


