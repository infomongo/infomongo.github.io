---
layout: post
title: An Oddity Casting Netflix from iOS to my Roku
description: I had to switch networks to get it to work, maybe you will too.
author: John Phillips
categories: other tech-support popular
date:   2018-03-01
twitter-image: /img/roku-promo.png
---

I just got a [Roku Streaming Stick+][r] and so far, I dig it. I bought it to replace an older Roku 2, that was starting to make a death rattle: channels would take a long time to open and sometimes streaming would get glitchy and require a restart. HBO NOW, I’m looking at you. Seemed like an “older hardware, newer software” problem. I chose this model based on the low price and the [Wirecutter][w] review.

[r]: https://www.roku.com/products/streaming-stick-plus
[w]: https://thewirecutter.com/reviews/best-media-streamers/


<img src="/img/roku-promo.png" class="full-width no-border" alt="Roku streaming stick and remote">

I was looking forward to the updated Netflix app (channel), with profile support. I also assumed I’d be able to ‘cast’ Netflix shows from my phone to the Roku. That is, search for shows in the Netflix app on my phone and then play them on the Roku. 

This kinda worked on my otherwise terrible Vizio TV. It worked well enough to convince me that this was the way to live. Find things to watch on the phone. Watch them on the TV. But with the Vizio it was crap shoot if the video would play in high or low-res, or endlessly buffer midway thru a show. These things are important, it turns out.

### The Internet Says it will Work, but it Doesn’t

[This page provides simple instructions][t] for casting from the Netflix app to a Roku. But it didn’t work, at least not at first. So in case anyone else runs into the problem, here’s what happened.

[t]:https://www.tomsguide.com/us/cast-netflix-youtube-roku,review-3576.html

<img src="/img/netflix-cast-crop.jpg" width="320" class="retina center no-border" alt="Screen shot of the Netflix mobile app.">

<p class="caption">The cast icon is right above Dave's head.</p>

I have a [TP-LINK Archer C7 AC1750 Wireless Dual Band Gigabit Router][tp], which I have been happy with. (The name makes me die a little inside, because I can imagine the nightmare committee behind it.) Like a lot of modern wireless routers, it provides both a 2.4 GHz network and 5 GHz network, because that’s what makes it dual band, you savage. 

[tp]: https://www.tp-link.com/us/products/details/Archer-C7.html


I originally connected the Roku to the 5 GHz network, because 5 is larger than 2.4 and because it goes thru walls. Or something. With the Roku on this network, when I launched the Netflix app on my phone, and clicked the **cast** icon, the Roku didn’t show up. The terrible Vizio was there, but not the Roku.

### A Solution (or at least a Workaround)

When I put the Roku on the 2.4 GHz network, boom, problem solved. Now the Roku shows up in the menu of devices I can cast, to. 

Yeah, the 5 GHz network is theoretically faster, but I tend to get the same throughput on both networks. I assume that it's a defect in my router that keeps this from working over 5 GHz, but I'm guessing.

This also works for in the YouTube app. It uses the same icon, and both apps, apparently, use the [DIAL][d] protocol to make this magic work.

[d]: http://www.dial-multiscreen.org  

### Other Niceties of the Roku Streaming Stick+

It’s a tiny HDMI stick, like an over-grown thumb drive. Kind of amazing that there is a computer in there, with enough CPU, memory and wifi to stream movies off the internet. It’s USB powered and worked fine when plugged into the USB port on the Vizio. Minimal cable madness.

Roku really have setup and installation nailed. This went easy and quickly. The hardest part was entering the wifi password. Without having to enter any codes or even the brand name of the TV, somehow the remote configured itself to control the volume of the TV during the setup process. 

The remote also has voice search. And Roku make a smart phone app that acts as a remote. Between voice and the smart phone keyboard you rarely have to enter text using the remote and an onscreen keyboard, which is cumbersome.

