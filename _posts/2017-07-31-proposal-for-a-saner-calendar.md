---
layout: post
title: Proposal for a More Rational Calendar
description: Designing a more rational calendar.
subtitle: Designing a better calendar
author: John Phillips
date:   2017-07-31
categories: other calendar ideas popular
js-include: date-convert.js
---

What is your first memory of the metric system? I remember learning about it in elementary school. It struck me that the units for measuring distance —centimeters, meters, kilometers— just made much better sense than the Imperial system, with 12 inches to a foot, 3 feet to a yard, and 5280 feet to a mile. Our system suddenly seemed so arbitrary compared to the base 10 rationality of the metric system.

OK, so consider our calendar. “Thirty days has September, April, June and November.” Weeks have 7 days, but months have 30 or 31. Except for that odd duck February, which has either 28 or 29. It’s just arbitrary. Holidays like the fourth of July and Christmas float around the week, sometimes landing on a Tuesday, sometimes a Saturday. 


<img src="/img/calendar-closeup.jpg" class="full-width">

### A Proposal 
 
Switch to a calendar with, basically, thirteen months, each with 28 days. 

#### 13 × 28 = 364 days

This leaves the year short by one day on regular years, two days on leap years. To fix this, we’ll add the extra days to a new fourteenth month at the end of the year, called “Non.” In normal years, Non has a single day called “Freeday.” In leap years, Freeday is followed by “Leapday.” These are holidays, so only people in the service industry have to work. *(I kid, but please tip your servers.)*

Days in the month of Non are not part of any week. They are a kind of padding so that each 28 day month begins on a Sunday and ends on a Saturday.

<img src="/img/calendar-diagram.png" class="full-width">

As a result, the year always starts on Sunday. This keeps the calendar fixed from year to year. Holidays no longer float from one day of the week to the next and you could use the same printed calendar every year.

There are thirteen 28 day months, and we need to figure out what to call them. I had originally thought it would be best to keep the current month names and just add a new one at the end. But this gets confusing since the months are shorter and they get “out of phase” as the year goes on. Plus half the fun of proposals like this is naming things, so I came up with some new month names.

To keep things simple, each month name has just three letters. This means there is no need to abbreviate them. To make them memorable, I chose names that are not English words but have unambiguous pronunciations.  The new months are:

Arp, Baw, Cor, Dur, Ell, Fen, Gam, Hob, Isp, Jom, Kro, Lem, Mog and Non

### Date Converter

<div id="date-convert">
	<div class="current-date">
		<h4>Date</h4>
		<select id="current-month">
			<option value="Jan">January</option>
			<option value="Feb">February</option>
			<option value="Mar">March</option>
			<option value="Apr">April</option>
			<option value="May">May</option>
			<option value="Jun">June</option>
			<option value="Jul">July</option>
			<option value="Aug">August</option>
			<option value="Sep">September</option>
			<option value="Oct">October</option>
			<option value="Nov">November</option>
			<option value="Dec">December</option>
		</select>
		<input id="current-day" type="number" pattern="\d*" value="1">
		<div class="error hidden">
			Enter a number between 1 and <span id="num">31</span>
		</div>
	</div>
	<div class="new-date">
		<h4>New Date</h4>
		<div id="new-month">
			Arp
		</div>
		<div id="new-day">
			1
		</div>
		<span id="dayofweek">Sunday</span> <span id="short-date">1/1</span>
	</div>
</div>


### Holidays

Since each 28 day month begins on a Sunday and ends on a Saturday, the Holidays always fall on the same day of the week.  So where do they fall?

**New Years Day** – Sunday, Arp 1st (1/1)

**Martin Luther King Jr Day** – Monday, Arp 16 (1/16)

**Valentine’s Day** – Saturday, Baw 14th (2/14)  
If you wanted this to fall on the same day as the current calendar, it would be Tuesday Baw 17, since Arp is 3 days shorter than January. But if we keep it on the 14th it’s part of a 3 day weekend becuase of…

**President’s Day** – Monday Baw 16th (2/16)

**Saint Patrick’s Day** – Friday Cor 20th (3/20)  
March 17th in the current calendar is Cor 20th in the new calendar. This keeps it on the same day of the year and moves it permanently to a Friday.

**Easter**  - Only the lord knows how this date is calculated. (Seriously, it is complicated.) It would fall on a Sunday in Dur or Ell.

**Memorial Day** – Monday, Ell 23rd (5/23)

**Independence Day** – Monday, Gam 16th (7/16)  
July 4 in the current calendar falls on Gam 17th, a Tuesday. This is incovenient, so we observe it on a Monday.

**Labor Day** – Monday, Jom 2nd (10/2)

**Halloween** – Saturday, Kro 28th (11/28)  
This has it falling at the end of the 11th month. But due to the shorter, 28 day months, this is just three days later than it falls now.

**Thanksgiving** – Thursday, Lem 26th (12/26)

**Christmas** – Monday, Mog 23rd  (13/23)
Mog 23 is the same day of the year as December 25 in the current calendar. I assume most people will get at least Mog 23rd & 24th off work.

**New Years Eve** – Freeday, Non 1st or Leapday, Non 2nd  
These are essentially extra weekend days, since they fall between the last Saturday of the year and the new year, which starts on Sunday.


### Some Example Dates 

In the U.S., the dates are written month, day, year. The fourteenth day of the third month would be Cor 14 or  3/14.  Other parts of the world would keep using the day, month, year format, so the same date is written 14 Cor or 14/03 .

For the rest of the examples, I’m going to show the U.S. format.

**Thursday, Baw 12, 2020**  
Thu, Baw 12, 2020  
Baw 12, 2020  
Baw 12  
2/12  
2/12/20  
2/12/2020  
02/12/2020  
2020-02-12

**Sunday, Dur 8, 2020**  
Sun, Dur 8, 2020  
Dur 8, 2020  
Dur 8  
4/8  
4/8/20  
4/8/2020  
04/08/2020  
2020-04-08

**Monday, Mog 23, 2020**  
Mon, Mog 23, 2020  
Mog 23, 2020  
Mog 23  
13/23  
13/23/20  
13/23/2020  
2020-13-23

### Other Considerations

This proposal doesn’t move the start of the year. Arp 1 falls on January 1. This means the new calendar has no relation to the seasons, same as the current calendar. If you wanted to fix this, you could have the year start on the first day of spring, the spring equinox, which is March 20 in the northern hemisphere. The seasons are reversed in the southern hemisphere, and March 20 is the autumnal equinox. In the southern hemisphere the spring equinox is on September 22.

