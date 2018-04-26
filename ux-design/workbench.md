---
layout: ux-detail
title: Placeable Workbench
description: A SaaS application, aimed at brands with hundreds or thousands of locations.
project-info: 'Placeable Workbench, 2014'
key-image: workbench-a-dash.png
additional-images: 
    - workbench-b-edit.png
    - workbench-e-hours.png
    - workbench-f-bulk-edit.png
---

A SaaS application, aimed at brands with hundreds or thousands of locations.  (*[more images below](#more-images)*)

Brands with large number of locations have some unique challenges in managing that data. 

- Locations must have the right coordinates (latitude & longitude) so that driving directions are seamless for customers. [Geocoding the address only gets you close.][4sq] Showing up on the wrong side of the street or in the middle can cause routing problems.
- The data shown on local sites (Google, Yelp, Foursquare & others) needs to be consistent. Inconsistent data hurts local SEO efforts and leads to missed sales.
- Problems in the data, like ALL CAPS NAMES and suite numbers in addresses, need to be removed before the data can be submitted. For example, Google would reject the entire file, if a single location had problems.

I was the  Lead UX Designer for Workbench.  I worked closely with product management to design features. I built an early prototype  to validate the concept and guide development. I created wireframes, comps, and also did some front-end development.

### Adjust Location Coordinates

After importing location data, the app would compare the locations’ coordinates to those shown on other local search sites. We’d flag the locations with poor pin placement and encourage the user to review and improve the pin placement.

The screen below shows a case with poor pin placement. The user can drag the pin to a new location. Or they could click on a pin from another site and move the location there.

<div class="ux-img large">
    <img src="/img/ux/workbench-c-map.jpg">
</div>

### Comparing Data from Other Sites

The screen below shows a comparison of location data. Again, we flagged locations with problems, like different addresses or missing phone numbers. Getting this right helps customers find the location and improves SEO.

<div class="ux-img large">
    <img src="/img/ux/workbench-d-compare.png">
</div>

### Different Types of User

There were two main types of users, Local SEO experts and brand marketing people. The former were very technical, often creating Perl or Python scripts to manipulate and massage CSV exports of location data. The marketing folks were less technical. They often wanted to use the data in new ways, like merging it into email marketing to direct people to their nearest locations.

Our approach was to automate a much as we could and to draw attention to problems that required human intervention. We also made it easy to export data to CSV. This allowed the SEO users to integrate the tool into their workflows incrementally.

[4sq]: https://engineering.foursquare.com/you-are-probably-here-better-map-pins-with-dbscan-random-forests-9d51e8c1964d
