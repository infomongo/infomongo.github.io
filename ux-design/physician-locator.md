---
layout: portfolio
title: Physician Locator
description: Wireframes, interaction design, UI design & frontend development for a physician locator.
class: 
---

<section class="white post" markdown="1">
<div class="text" markdown="1">

# Physician Locator

<div class="meta">Interaction Design, Wireframes, UI Design, Frontend Development</div>

In July of 2015 [Moonsault][1] was approached about building a physician locator for a large healthcare company. The project had an aggressive timeline. Design started in mid July, with wireframes and comps completed in early August. Development was initially set to be complete by the end of August, in time for a September first launch. Development ended up being extended two weeks, at the request of the client. They needed the extra time to complete development of the data API that the app used.

[1]: http://moonsault.co/

## The Brief

The company wanted to create a tool to help their insurance agents sell policies. The original ask was to develop both a mobile app and responsive site, but due to the tight timeline, we advised them to focus on the responsive site. On mobile devices and tablets, the site prompts users to save a bookmark to the home screen, which gave the site an app-like feel.

</div>
</section>	
<section class="dark post" markdown="1">
<div class="text" markdown="1">


## Our Process

The users of the site were employees of the healthcare company, but they were located out of state, and were part of a fairly recent acquisition. There were some politics and mistrust between them and our denver-based client. As such, we didn’t have as much access to the users as would have been ideal, but we had several calls with a group of the sales people, where we learned about their business and what the app needed to do to be useful.

I spent several weeks creating wireframes and reviewing them with our client including representatives from the sales group. I led these meetings, explaining the designs, and the tradeoffs between different approaches.

After the wireframes were approved, I created comps based on the brand guidelines for the acquired company. The comps were created and approved quickly, in about a week.

Once the comps were approved, we started building the site. I did much of the  frontend development, creating HTML and CSS for the site. The bulk of the development was done in three weeks, and was largely complete by the first of September, 2015. 

</div>
</section>	
<section class="white post" markdown="1">
<div class="text" markdown="1">

## Not Our First Locator Rodeo

The team at Moonsault had a quite a bit of experience building locators. We had both worked for a Placeable, a Denver company that created locators for national brands like Nationwide Insurance and JPMorgan Chase. Given the limited amount of user research, and a timeline that didn’t allow for any usability testing, we thought it best to stick close to the classic locator design, one that we knew worked well for a wide variety of users. This design has a search page, a results page with prominent filters, and a details page for each location.

Business rules at the company organized the physicians into different groups, called IPAs. A doctor could belong to multiple groups, but each patient could enroll in only one. The challenge was to provide a way to visualize these networks. To help the agent and customer find a group that included all the doctors the customer to visit. 

The design we settled on combines a locator with a shopping cart. You can find and save doctors. You can filter by speciality, language and other physician attributes. For any given doctor, you can search within their network. The saved page highlights the groups that saved doctors have in common, and displays a warning if there aren’t any. 

The salespeople envisioned sitting down with a potential customer and using the site toegther. The saleperson would aks questions and operate the site, and share the results on their laptop, tablet or mobile screen.


## Wireframes

<div class="">
   <img src="/img/portfolio/phys-desk-search.png" alt="search page" class="full-width border">
</div>

<p class="caption">search page</p>

The wireframe below shows the save interaction. The link changes from “save” to “saved” and the count in the header increments.

<div class="">
   <img src="/img/portfolio/phys-desk-results.png" alt="results page, initial view" class="full-width border">
</div>

<p class="caption">results page, initial view</p>

<div class="">
   <img src="/img/portfolio/phys-desk-refine.png" alt="results page, filters applied" class="full-width border">
</div>

<p class="caption">results page, filters applied</p>

<div class="">
   <img src="/img/portfolio/phys-desk-details.png" alt="search with auto-complete menu " class="full-width border">
</div>

<p class="caption">physician details page</p>


<div class="">
   <img src="/img/portfolio/phys-desk-saved.png" alt="the saved providers or “cart” page" class="full-width border">
</div>

<p class="caption">the saved providers or “cart” page</p>

The left column shows the groups or IPAs that the collected physicians have in common. The customer would be enrolled in one of these groups.


<div class="">
   <img src="/img/portfolio/phys-desk-save-warning.png" alt="the saved providers or “cart” page" class="full-width border">
</div>

<p class="caption">the saved providers page, showing an alert</p>

The saved providers might not share a group in common, in which case the sale is more challenging. The customer will need to choose different doctors, if they want to enroll.

<div class="many">
   <img src="/img/portfolio/phys-mob-search.png" alt="search page on a mobile device" class="border inline">
   <img src="/img/portfolio/phys-mob-results.png" alt="results page on a mobile device" class="border inline">
   <img src="/img/portfolio/phys-mob-details.png" alt="details page on a mobile device" class="border inline">
   <img src="/img/portfolio/phys-mob-saved.png" alt="saved provider page on a mobile device" class="border inline">
</div>

<p class="caption">mobile wires</p>

## The Site at Launch

<div class="">
   <img src="/img/portfolio/phys-loc-search.png" alt="search page" class="full-width border">
</div>

<p class="caption">search page</p>

<div class="">
   <img src="/img/portfolio/phys-loc-results.png" alt="results page" class="full-width border">
</div>

<p class="caption">results page</p>

<div class="">
   <img src="/img/portfolio/phys-loc-details.png" alt="details page" class="full-width border">
</div>

<p class="caption">details page</p>

<div class="">
   <img src="/img/portfolio/phys-loc-cart.png" alt="saved providers page" class="full-width border">
</div>

<p class="caption">saved providers page</p>

<div class="many retina">
   <img src="/img/portfolio/phys-loc-mob-cap-search.png" alt="search page on a mobile device" class=" inline">
   <img src="/img/portfolio/phys-loc-mob-cap-results.png" alt="results page on a mobile device" class=" inline">
   <img src="/img/portfolio/phys-loc-mob-cap-details.png" alt="details page on a mobile device" class=" inline">
   <img src="/img/portfolio/phys-loc-mob-cap-saved.png" alt="saved provider page on a mobile device" class=" inline">
</div>

<p class="caption">mobile screens</p>

</div>
</section>	
