---
layout: portfolio
title: Oil & Gas Search Application 
description: User research and wireframes for an oil & gas search application
class: 
---

<section class="white post" markdown="1">
<div class="text" markdown="1">
		
# Oil & Gas Search Application

<p class="meta">User Research, Interaction Design, Wireframes</p>

An oil & gas data company contracted with [Acclaro Design][2] to help design a new feature for their desktop app. The project took place in February and March of 2019.

The app takes a map first approach to search. Users draw a shape on a map, then choose a time frame and a data set to query. After the data loads, in a spreadsheet-like view, the user can map the data, as shown in the image below. 

[2]: https://acclarodesign.com

<div class="">
	<img src="/img/portfolio/oil-map-search.png" alt="before and after states of the map search interface" class="full-width">
</div>

<p class="caption">First the user draws a shape on the map (left). <br>After data loads, it can be mapped (right).</p>

## The Brief

Our client wanted to add a new type of search to the product, one that allowed users to search without first drawing on the map. Map search generally worked well, but the team knew there were use cases that weren’t well served by this approach.

</div>
</section>	
<section class="dark post" markdown="1">
<div class="text" markdown="1">

## Our Process

**We started with research.** We conducted five user interviews, each about an hour, in February. Our client recruited the participants, who came from a wide variety of backgrounds and different size companies. Each participant used the product differently, as each company had different take on the market, different holdings and divergent ideas about how to make money.

I was the lead researcher and developed the questions we asked, but all the sessions were also attended by Jeff Davenport, a colleague who did the UI design for the project. We had the participants share their screens with us, and show us who they used the product. All the sessions were recorded. The session were a mix of our questions and open-ended conversation about how they used the product.

At the beginning of March we met with the client, including representatives from product management and development, to summarize our research findings. I created the deck and led the meeting, explaining what we learned, the problems we saw, and the opportunities we identified. Overall users were very happy with the product, even though they saw areas that could be improved.

**Then I started wireframing**, after first meeting with the development team to better understand the technical constraints. We did three rounds of wireframes in March. I spent about a week and a half on each round. After each round I presented the designs to the team, explained them, the tradeoffs between different approaches, and gathered feedback. In the initial round, I presented two different approaches to search, several approaches to an advanced search we called the query builder, and three approaches for how to integrate the new search into the app. Over the next two rounds, we narrowed the field and arrived at the design that development began implementing.

</div>
</section>	
<section class="white post" markdown="1">
<div class="text" markdown="1">

## What We Learned 

The key learning from the interviews were that **searches could be slow, and that they often returned a lot of records**, often more than could be mapped. (Result sets with more than 50,000 records can not be mapped in the application, to keep memory and CPU usage with reasonable bounds.)

These two problems were interrelated. The larger the result set, the longer it would take to load. **Users had internalized this constraints and were working around them.** They talked about searching the largest area possible, or querying shorter time frames than they ideally would, to limit the number of records returned and speed up the process. 

When searching an area on the map, then results are not added to the map immediately. Instead they load into a spreadsheet-like view first. In this view users can filter the data, and then map it. But this process was also a bit time consuming. Often the user would have to wait for the initial data to finish before filtering.

**Avoiding this slowness, and giving users tools to filter the data without waiting** for the entire set to load were key takeaways. It also became clear that allowing users to query the data based on its attributes would be useful, and this informed the design of what we called the query builder.
 
Another thing we learned was that the language used in the app, while confusing to folks outside the oil and gas industry made sense to its users. In our interviews **we heard users using these terms**, and when we asked them directly about it, they explained that they were industry terms. One participant pointed us to a web site that provided a glossary of industry terms, which helped validate the language used in the app.

## Wireframes

<div class="">
	<img src="/img/portfolio/oil-search-menu.png" alt="search with auto-complete menu " class="full-width border">
</div>

<p class="caption">Search field with auto-complete menu</p>

The menu helps the user narrow their results, alllowing them to search a single data set using common attributes.

<div class="">
	<img src="/img/portfolio/oil-search-table.png" alt="search results table" class="full-width border">
</div>

<p class="caption">Results are shown in a table, similar to the display used elsewhere in the app.</p>

The dropdowns and check boxes in the left rail allow the user to filter the results set. The app uses Elastic Search as a data store. I knew from previous projects that Elastic Search can surface refinements from the entire result set, even when only displaying a single page of results. 

Mutually exclusive refinements are presented in a dropdown, while check boxes allow the user to apply multiple filters from a single data attribute.

### Section, Township & Range Search

<div class="">
	<img src="/img/portfolio/oil-search-section.png" alt="search by section, townshio and " class="full-width border">
</div>

<p class="caption">Interface for searching by section, township & range</p>

<div class="">
	<img src="/img/portfolio/oil-search-section-modal.png" alt="sections modal" class="full-width">
</div>

<p class="caption">The modal allows the user to enter multiple sections. The field intelligently parses the input, allows users to copy and paste from spreadsheets and other sources.</p>

In much of the U.S., land parcels are divided into townships, which are squares six miles on a side. These are further subdivided into 36 sections, each of which are a mile wide. *(This is based on the [Public Land Survey System](https://en.wikipedia.org/wiki/Public_Land_Survey_System).)*

In legal documents, these are typically abbreviated like 30-04N-06E-IM, which refers to Section 30 of the Township at 04 North and 06 East of the Indian Meridian. (The meridians are north-south lines that were chosen somewhat arbitrarily when the states were formally surveyed.)

It’s pretty common to want to search for a specific section of land, as it might be referenced on a legal document, like a deed or lease. The check box labeled “Nine Spot” expands the search to the eight contiguous sections surrounding the one specified. *(“Nine spot” is opaque to those unfamiliar with it, but the term is commonly used in the oil and gas idustry.)*

### Query Builder

This wireframe shows the initial state of the query builder. It's shown here out of context. We explored several different approaches to presenting this UI in the app, but the basics of the query builder UI were constant.

<div class="">
	<img src="/img/portfolio/oil-query-builder-1.png" alt="query builder, initial view" class="full-width border">
</div>

<p class="caption">iniital state of the query builder</p>


<div class="">
	<img src="/img/portfolio/oil-query-builder-2.png" alt="query builder, showuing a moe complex query" class="full-width border">
</div>

<p class="caption">a more complex query</p>


<div class="">
	<img src="/img/portfolio/oil-query-builder-3.png" alt="query builder, in the app" class="full-width border">
</div>

<p class="caption">The query builder in the app.</p>

</div>
</section>	

