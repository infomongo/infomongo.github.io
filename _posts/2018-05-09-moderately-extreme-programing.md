---
layout: post
title: (Moderately) Extreme Programming
subtitle: Is your team agile or just having scrums?
description: My introduction to modern software development and where agile goes wrong.
author: John Phillips
categories: other development 
twitter-image: /img/building-architecture.jpg
---

<div>
<img src="/img/building-architecture.jpg" class="full-width" alt="">
</div>

I got my start in technology working at [Quark][quark]. Quark was a great company and I learned a ton. I started in tech support, working the phones, helping  to diagnose and fix customer problems. I did some QA work, some technical writing, product management and eventually UX design.

Quark was packed with smart people. You couldn’t swing a cat without hitting three or four legitimate geniuses. But the development process — particularly on the flagship project, QuarkXPress — was a mess. 

The release cycles were very long. [Looking at the wikipedia page for QuarkXPress][wiki] — and yeah that’s how it’s spelled — there were seven years between the release of versions 3 and 4. Version 3.1 was the first release that ran on Windows and on the Mac, 3.3 was the first PPC native version. <a name="jump"></a>Only a few new features were introduced in this period. I worked at Quark from 1995 to 2000. I started supporting  3.3, saw the release of 4.0, and did UX design on version 5.

## The Hell of Thousand Extensions

Here’s what development looked like at Quark at the time. QuarkXPress supported plug-ins, which were officially called XTensions, because of course they were. Extensions added new features to the product. You could buy them from third-parties and XPress shipped with a bunch. Most of the new features of 4.0 were developed as extensions.

Product management picked the features for a release and development managers assigned engineers to work on them. Essentially, each engineer had their own extension to work on. Some features were bigger, of course, and multiple engineers might work on those, but in general it was one engineer to a feature, one extension per feature.

This was kind of a crazy system with some weird knock-on effects. In total, there were several dozen extensions that shipped with the product. But during development, the engineers generally wouldn’t load any other extensions. There were a lot of reasons for this. Build time was probably a factor, as was general stability. When a new build got delivered to QA, this would be the first time anyone had run the project with all the extensions. And of course they would interact in unusual ways. Fairly often, especially early in the cycle, the program wouldn’t even launch.

<div>
<img src="/img/spark-spiral.jpg" class="full-width" alt="">
</div>

You’d log a bug, and get a note back from a developer that they couldn’t reproduce the problem. After some back and forth, it would turn out that they were testing in the latest version of their code and only running their extension. Often the bug would only occur with multiple extensions loaded.

Sometimes it wouldn’t be clear whose code was responsible for the problem, and who should fix the bug. The source of the bug might be in the core project, which had a lot of old code that people were frankly scared to touch.

Even without the oddities introduced by this system, it wasn’t an efficient way to staff the project. Management couldn’t really bring their priorities to bear. It was hard to tell how fast the team was moving. There wasn’t a good way to track progress beyond the bug count. There was always a long slog at the end of the release cycle, just endless bug fixing. The release date would get pushed back. More bugs would be fixed. Lather, rinse, repeat.

There were lots of other problems, too. Long requirements documents that nobody read or updated. QA, Engineering and Product Management all working in silos, usually on different floors. There wasn’t enough communication between departments and it didn’t feel like one large team.

## Life After Quark

After Quark, I worked at Creo. I worked with a bunch of the same folks I had worked with at Quark. Basically, I followed some of the geniuses to a new home . (I covered some of this in the story of [tokens][tokens].)

Initially, development at Creo looked a lot like it did at Quark. We didn’t have extensions, but we did kind of follow the “one developer per feature” model. And we were initially working in silos, too. With a smaller team there was more communication, but not really enough. And a lot of familiar problems began to surface. It was hard to tell how fast we were moving and if we were working on the right things.

But fairly soon, we started doing **Extreme Programming**. We weren’t hard core believers, we didn’t do any pair programming, for example. But we did have a daily standup meeting and we wrote stories describing each new feature. 

Once we started meeting every day, communication improved dramatically. And after we had been at it a while, we could always hit our release dates without any slogging.

I was doing UX design for the team, so I was one of the main “customer representatives.” As soon we made the switch, I had developers in my office all the time. We had lots of productive conversations. An engineer would raise an issue, like a data load process that was slower than anticipated. We’d talk about the various options and make some choices. This could result in a sort of “band-aid” being applied temporarily, and a new story written for the next iteration. Or we might change our approach, or adapt the design. But everyone had a much better picture of what “done” looked like and what the actual technical hurdles were.

The biggest change tho, was in how the project was scheduled. Initially, we had a very clear idea of what features we were going to implement and in what order. But as soon as we started working, that plan pretty much went out the window. Some of our feature ideas would just take longer to implement than they were worth. “It would be great to have that feature, but not if it is going to take a month to build.” 

But the surprising thing was that as we built and used the application, we started to have new ideas about how it should work. Once we’d used a feature, we’d have ideas for similar features that took priority over the work we’d previously planned.

The standup meetings were a great way to see if something was stuck. Occasionally an engineer would give an update that something was “pretty close to done” and “just had some kinks to work out.” And then the next day they’d give pretty much the same update. By the third day of this, it was clear they were stuck. Maybe the design had problems. Maybe they just needed another pair of eyes, or maybe it was time to cut bait and drop the work.

And the secret to hitting our deadlines? It was always to drop scope. This was back in the days of shrink-wrapped software. Our deadlines were driven by a demos at trade shows. With fixed deadlines, the only thing to do was cut scope. As we got close to the date, we’d could all tell what was achievable and what needed to be deferred.

We were introduced to it as Extreme Programming (or rather eXtreme Programming), but most people would now recognize this as agile development. And what is the joke? Agile development is the worst software development methodology, **except for all the others**. 

I have worked on agile teams with too much ceremony and way too many meetings. But when it works, it gets people communicating and making rational tradeoffs. It allows management to bring their priorities to bear and gets everyone pulling in the same direction. 

## Where Agile Goes Wrong

If your team is spending a lot of time estimating stories and measuring velocity, I think you are missing the point. The defense of measuring velocity is that it’s the only way to estimate when the project will hit some milestone. “We have to measure our velocity to see if we'll hit our 1.5 release.”

The milestone is some set of features that were promised to a customer, to “the board” or some such. Often on these teams, product management is effectively absent. Somebody from *program management* is
 tasked with “running the scrum” and communicating with product management.  

However, this ignores a fundamental reality of software development. It’s a “scope, schedule or quality, choose two” kind of world. *(People talk about budget, schedule and scope, but I have never worked on a project that could be delivered faster by increasing the budget. The cost of bringing new people up to speed outweighs the benefits of adding them over the short term.)* If the set of features is set in stone, well then scope is fixed. And often, the date was promised too, so there’s your schedule. This is pretty much a ticket to long hours, poor quality and low morale.

Here's a test to determine if your team is actually practicing agile development or just going thru the motions:

### Has the scope been reduced or the schedule extended in the last two months?

If there hasn’t been a change to either, then something is missing. In my experience, what missing is a real stakeholder from project management. Having a dedicated scum master won’t paper over it.

In every project you learn things as you go. Sometimes, a feature you thought would take a while goes much quicker than expected. But life being what it is, usually what you learn is that there are more details that have to be accounted for and this will take additional time or resources. This isn’t because of bad faith, or a lack of expertise. It’s because there are things that can’t be known in advance, things that you discover only once the project is underway. And somebody involved in setting dates and deliverables has to take this onboard.

If your team doesn’t have a legitimate way to address these discoveries, then you aren’t being agile. You are just having standup meetings.


[quark]: http://www.quark.com/
[wiki]: https://en.wikipedia.org/wiki/QuarkXPress#Version_history
[tokens]: /ux-design/tokens/