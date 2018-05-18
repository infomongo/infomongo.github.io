---
layout: ux-detail
title: Tokens 
description: A peer-to-peer file sharing product
project-info: 'Creo Tokens, 2001'
key-image: tokens-3-icons.png
class: no-border push
---

A peer-to-peer file sharing product.

It was 2001 and the internet was crazy for peer-to-peer technology. Napster had just been shut down after being sued by the Recording Industry Association of America (RIAA). Gnutella, Kazaa and a whole bunch of other companies with Very Silly Names were releasing peer-to-peer file sharing products. 

> A token is like a shortcut or an alias, but one that can be sent via email or instant message.

At the time, I was working at Creo, in the Creative Software Group.  Creo was a Canadian company. They made a product that was like a laser printer for aluminum plates. You’d send a digital file to the device and it would spit out a printing plate, ready to be inked. They had other products, but they were all targeted at service bureaus and commercial printers.

The company was well respected in the commercial printing world, but largely unknown outside it.  They were looking to expand into larger adjacent markets, like the “creative” market of people who used Adobe products and QuarkXPress. 

A group of people I worked with at Quark had left the company to start their own thing. They were also building software for creative professionals. Instead of seeking VC funding, they partnered with Creo to start the Creative Software Group in Denver, CO. Essentially, Creo Canada was the funding for our little Denver startup.

I was the first hire made by the group. Our first product was Six Degrees, an automated email and document tracking application.  It was designed to make collaborating via email easier. Tokens was our second product. It was about sharing large files via email.

While on a business trip for the group, laying in the hotel bed unable to sleep, I had a thought. What if you could email an alias? If you wanted to send a large file to someone, you would create tiny alias and email that instead. The recipient could transfer the file later.

On the Mac, an alias is small file that points to another file. It acts like a lightweight copy of the original file. *On Windows these are called shortcuts.* Anything you can do with the original file, you can do with the alias. But they aren’t portable between machines.

<div class="">
	<img src="/img/ux/token-redeemer.gif" class="no-border float pull full-width" alt="The Token Redeemer Window">
</div>


That was the seed idea behind tokens. Make a portable alias that you could send via email or instant message. We’d use peer-to-peer technology to actually transfer the file. It would work cross-platform and be encrypted so that only someone with the token could retrieve the file.

At the time, it wasn’t easy to send a large file to someone. If the file was smaller than about 2MB, you could email it. But larger files would get blocked or dropped by email servers. And even when you could get a larger file thru, it was pretty painful to retrieve it via email.

The only really good alternative was to upload the file to an FTP server. Even then the recipient usually needed and FTP client to retrieve it.  You couldn’t even email a link to the file, because some browsers supported FTP but most didn’t.

## Two Applications

There were two applications, the Token Creator and the Token Redeemer. The Redeemer was free. Anyone could download it and it ran on Windows (95, 98, ME, NT,  2000 & XP) and on the Mac (Mac OS 9 & OS X). The Creator cost $50. It ran on Windows (2000 & XP) and on Mac OS X. 

### The Token Creator 

<div class="">
	<img src="/img/ux/token-creator-icon.png"
		alt="Token Creator Icon" 
		srcset="/img/ux/token-creator-icon.png 112w"
		sizes="(min-width: 500px) 112px, 56px"
	class="no-border float pull" >
</div>


To create a token, you'd drag a file onto the application icon, or its main window. You could drag one file or several. If you dropped a folder on the app, it would create a token representing the entire directory structure contained in the folder. 

Other than the main window, which was just a big “drop files here” target, the app had very little UI.  It had preferences to control where tokens were created. The options were:

- **Same folder as source files** (the default) – With this option set, the token was created in the same folder as the file you dragged. 

- **Automatically create an email message and attach token** – A new email was created and the token was attached to the message.

- **Prompt for location** – The app would display a standard **Save** dialog and you’d pick the name of the token and the location.

- **Always use this location** – This setting required you to choose a folder on disk and tokens would always be created there. 

Unless you chose “prompt for location,” the name of the token was based on the name of file. So if you dropped a file named “Final-Logo.psd” on the app, you’d get a token called “Final-Logo.tkn.”

The app also added contextual menus. You could right-click on any file or folder and select either “Create Token” or “Create and Email Token”.


### The Token Redeemer

<div class="">
	<img src="/img/ux/token-redeemer-icon.png" 
		alt="Token Redeemer Icon" 
		srcset="/img/ux/token-redeemer-icon.png 112w"
		sizes="(min-width: 500px) 112px, 56px"
	class="no-border float pull" >
</div>


The Redeemer application was even simpler. You could redeem a token by dropping it on the main window, the app icon, or by double-clicking on it.  

While a token was being redeemed, we’d show a window with a progress bar and an estimate of the time remaining. This window looked a lot like the one shown when you were copying files in the Finder or Explorer. I wanted it to feel like you were copying files from a server.

By default, redeemed files got placed in the same folder as the token. If you redeemed a token attached to an email, you’d get a dialog asking where to put it. The app had preferences similar those for the creator. And there was a check box to delete tokens after they were redeemed. 

### The Tokens 24x7 Server

Normally, the sender’s machine had to be be running to redeem a token.  To avoid this constraint, we created a token server that your IT department could install. In this configuration, files were stored on the server instead of your machine.  A token created this way could be redeemed when your computer was off or not connected to the internet. 

## The Tokens Team

Tokens was developed by a small team in the Vancouver office, three really great engineers.

I lead the team remotely from Denver. We had a standup meeting every day and worked in iterations. I wrote the stories and designed the UI, mostly using Photoshop to create mockups.

We had a QA department in Denver and they did the formal testing. But the whole team, and members of the Six Degrees team, used tokens a lot. We “ate our own dog food” as it were.

## Tokens in the Market

I’m guessing this is the first time you have ever heard of Tokens, so clearly we didn’t take over the world. What happened?

### The Sender's Machine had to be Running

The main difficulty redeeming tokens was that the sender's machine had to be running. This wasn't a great match for the asynchronous nature of email. But in practice, redeeming a file required just a bit of coordination. You might try to transfer the file and get a message that machine was not running or not connected to the internet. If this happened, you'd write back and plan a time to complete the transfer. 

Still this was awkward. Maybe we should have always stored tokens on servers, or tried to make a peer-to-peer network of machines…

### Firewalls & Such

We wanted to make tokens easy to use, no matter how your network was configured. We didn’t want users to have care about that stuff and troubleshoot it. 

So we created a service running in the Creo network called the token relay service. If you were behind a firewall and the ports we were using were blocked, we’d route the traffic thru our relay servers. An unfortunate side effect of the relay was that Creo ended up paying for the bandwidth used in the transfer. 

This complicated our go-to-market strategy. The first version of the product cost $50 but it included a 5GB cap per month.  Only transfers that went thru the relay service counted against the cap. But to explain the cap and why it existed, you had to mention firewalls and such.  Even with the cap, the economics were complicated. The product had a fixed upfront cost, but Creo could end paying for some of the bandwidth used in perpetuity. Later versions used subscription pricing, and charged $50 a year. But this just made the marketing message worse.  

I’m not sure how Napster, Gnutella and all the others handled firewalls. Maybe they just used port 80 or maybe they weren’t used at work that much. Most people didn’t have firewalls at home back in the early 2000s.

### Marketing Efforts

I think the main reason it didn’t take off is that it was just never really marketed all that much or that well. But I’m guessing a bit when I make this statement. I was no longer with Creo by the time tokens launched in October of 2003.

And the end of the summer in 2003, nearly the whole of the Denver office was laid off. A change in the exchange rate made our salaries more expensive in Canadian dollars. Which caused management to take a hard look at the Denver office.

Most of the Denver team was working on Six Degrees, and it was not selling as well as we  hoped. It had been released in September of 2002 with a substantial marketing push, but it wasn’t gaining traction. So the Canadian mothership decided to eject the expensive Denver office, and focus on more profitable areas. 

I’d like to think that had I stayed on with the company, I might have been able to make difference in the marketing efforts behind tokens, but that’s probably wishful thinking. I was pretty young, and I wasn’t going to move to Canada. Not sure I would have had that much of an impact on the marketing efforts as a remote employee.

### Final Thoughts

I look back fondly on tokens. I wish it would have taken off. I got to use it enough to know that worked well. We sent a lot of large files from Denver to Vancouver. But long-term, it would have ended up competing with services like [DropSend][dropsend], where you upload a file to website and send a link. And now Dropbox has made this very easy. Just right-click on a file in your Dropbox and get a link.  

In researching this, I found some old blog posts talking about tokens. [Here’s one from Joel on Software][joel] and one from [Khoi Vinh’s Subtraction.com][khoi]. Here’s a nice write up from [TidBITS][tid]. 

Oh, and the icons for Tokens and Six Degrees were created by [Felix Sockwell][felix]. His portfolio site doesn’t display very well until you resize your browser window. But he has a lot of cool work, most of it in the same, single-line-drawing style as the tokens icons.

[dropsend]: https://www.dropsend.com

[joel]: https://www.joelonsoftware.com/2003/10/23/24-2/

[khoi]: https://www.subtraction.com/2003/11/25/creo-tokens/

[tid]: https://tidbits.com/article/7449

[felix]: http://felixsockwell.com

