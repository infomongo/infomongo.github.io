---
layout: portfolio
title: Placeable Workbench
description: A SaaS application, aimed at brands with hundreds or thousands of locations.

---

<section class="white post" markdown="1">
<div class="text" markdown="1">

# Placeable Workbench

<div class="meta">Interaction Design, Wireframes, Prototyping, UI Design, Frontend Development</div>

I was the lead UX designer at Placeable when we built Workbench, starting in 2013. Development of the product was continuous, and I led the design efforts until I left the company in October of 2014.

## The Brief

This was an internal product idea, a SaaS application, aimed at brands with hundreds or thousands of locations. Brands with large number of locations have some unique challenges in managing that data. 

* **Locations must have the right coordinates** (latitude & longitude) so that driving directions are seamless for customers. [Geocoding the address only gets you close.][4sq] Showing up on the wrong side of the street (or in the middle) causes driving directions to be confusing. "You have arrived at your destination," but you can't find it.
* **The data shown on local sites** (Google, Yelp, Foursquare & others) **needs to be consistent**. Inconsistent data hurts local SEO efforts.
* **Problems in the data**, like ALL CAPS NAMES and suite numbers in addresses, **need to be fixed** before the data can be submitted. For example, Google would reject an entire file, if a single location had problems.

[4sq]: https://medium.com/foursquare-direct/you-are-probably-here-better-map-pins-with-dbscan-random-forests-9d51e8c1964d

Brands with a lot of locations would typically hire an agency with experience in Local SEO. The agencies needed to collect and modify the company’s data. 

* Depending on the organization, the location data might live in a large “legacy” database, like an AS400. 
* Or it might live in a bunch of individual spreadsheets, with a different file for each region. This was common among franchises which were often fairly decentralized.
* The local SEO agency would work with the data in CSV format, and would “clean it” using perl, python or shell scripts, and with macros in Excel.
* This was a pretty ad hoc process, because each organization had its own unique data format and individual problems that that needed to be fixed. 

**The core idea of workbench was to create a centralized repository for location data**, one that helped find and fix common problems. It was aimed at less technical users. Instead of needing SEO experts capable of writing scripts to modify the data, the work could be done by people comfortable working in Excel.

</div>
</section>	

<section class="dark post" markdown="1">
<div class="text" markdown="1">

## Our Process

**We wanted to change the way companies managed their location data.** We didn’t want to design a better tool for the local SEO agencies. We wanted to empower brands to manage their own location data. We didn’t really have a group of users to interview about their wants and needs, because we were trying to enable them to do something new, something that they were currently outsourcing.

Our CEO and product management had a vision for how the product should work, and we had a lot of local SEO expertise in house. While we were building Workbench, we were acting as the local SEO agency for our clients, like [Nationwide Insurance](nationwide-locator). Management had a vision of what the MVP looked like, and this was the foundation of the first release.

I worked closely with product management to design features. I built an HTML prototype to validate the concept and guide development. I created wireframes, comps, and also did some front-end development. The process was interative. After releasing the first version, we started rolling out new features. Some of these were based on our roadmap, while others were added based on customer or sales feedback.

The sale was typically to the CMO or CTO, and often we were responding to their feedback, rather than direct feedback from people using the product. 

</div>
</section>	


<section class="white post" markdown="1">
<div class="text" markdown="1">
    
## Screen Shots 

<div class="">
   <img src="/img/portfolio/workbench-a-dash.png" alt="dashboard (home page)" class="full-width border">
   <p class="caption">the dashboard or home page</p>
</div>

The dashboard was designed to provide a summary of the loaded location data, and to invite actions to improve the data.

### Adjust Location Coordinates


<div class="">
   <img src="/img/portfolio/workbench-c-map-crop.jpg" alt="map showing the location, and where other local sites plot it" class="full-width border">
   <p class="caption">map showing the location, and where other local sites plot it</p>
</div>

After importing location data, the app would compare the locations’ coordinates with those of other local search sites. We’d flag the locations with poor pin placement and encourage the user to review them.

The screen above shows a case of poor pin placement. The user can drag the pin to a new location. Clicking one of the other map pins showed a menu with an option position the pin at that location.

### Edit Location

<div class="">
   <img src="/img/portfolio/workbench-b-edit.png" alt="results / edit location screen" class="full-width border">
   <p class="caption">results / edit location screen</p>
</div>

This screen shows the edit screen. The address is flagged because it contains a suite number. Google would flag this as an error, so it was best to put the suite number in the **street 2** field or remove it. 

Hovering in front of the flag icon showed a tool tip with a more detail explanation of the error.

Chnages were saved automtically. 


### Data Comparison

<div class="">
   <img src="/img/portfolio/workbench-d-compare.png" alt="comparing listing data across sites" class="full-width border">
   <p class="caption">comparing listing data across sites</p>
</div>

The screen above shows a comparison of location data. Again, we flagged locations with problems, like different addresses or missing phone numbers. Getting this right helps customers find the location and improves SEO.


### Bulk Edit

<div class="">
   <img src="/img/portfolio/workbench-f-bulk-edit-crop.png" alt="bulk edit screen" class="full-width border">
   <p class="caption">bulk edit</p>
</div>

This screen shows the bulk edit interface, used for modifying multiple locations. The interface is similar to one used for creating email filters. 

The export screen was similar, allowing the user to export selected location and also apply some modifications at export. Use often wanted to leave their data unchanged, but make changes to the exported file that were required to submit to Google or one of the other local directories.

<!-- ## What Did We Learn
should have done more user research. 
might have made sense to target local SEO agencies -->

</div>
</section>	

