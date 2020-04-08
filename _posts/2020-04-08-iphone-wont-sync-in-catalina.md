---
layout: post
title: Unable to sync my iPhone in Catalina 
subtitle: Rememeber when Apple was good at software?
description:  How to fix this error 
author: John Phillips
categories: other apple bugs 
---

After updating my Mac to macOS 10.15.2 (Catalina) and my iPhone iOS 13.4, I could no longer get my iPhone to sync. Every time, I tried I would get this error:

### The iPhone “Mjölnir” could not be synced because the connection to the iPhone was lost.

*(My iPhone isn't actually named after Thor's hammer, but maybe I should change that…)*

I wasn't sure the update had caused it, but I first noticed the problem after updating. Googling gave all kinds bad advice. "Make sure you are using an Apple brand cable." "Trying zapping the PRAM." That kind of useless horseshit.

Then I had thought. I had added some new music to the Music app, and it had messed up my Music Library. About 50 albums no longer had an **artist** or an **album title**. I fixed those, but then digging in deeper I realized I hadn't fixed all of them. I still had a bunch of songs by "Unknown" in an "Unknown Album." 

What if the sync was failing, because of this damage? I was syncing was music to the iPhone, after all. 

I reverted to a backup of my music, at `Music > iTunes > iTunes Media`. I had to delete everything in the Music app, and then add it all back again. This fixed all the broken stuff in my library. (With the Music app, the song files are stored at `Music > Music > Media.`) 

This was a pain in the ass, and took far too long. I had to clear up a bunch of hard drive space, because the media files get copied to the Media folder. And on the first attempt, the import only got half of the songs because the Mac thought I was out of disk space, even though there was plenty. I also had to export and then re-import a bunch of playlists.

## The Fix

After deleting and recreating my Music Library, my iPhone synced without a problem.

If you are getting this error, maybe this fix will work for you, too. You might have to look at what else you are syncing, like photos, podcasts, audiobooks, etc.

## The Ugliness

There are so many bugs and UI failures here:

1. Adding music to the library caused data loss. **This should never happen**. And fixing this manually would have been time consuming and frustrating. "Who wrote 'If I Were Going' and what album was it on?"
2. The error message was misleading / not helpful. Maybe the connection was getting lost, but why?
3. iTunes gave feedback about what it was syncing, music, photos, etc. In Catalina, the Finder doesn't provide this feedback. If I had known it was consistently failing when syncing music, that would have been a clue where to look.
4. The Mac apparently has no idea how much free disk space it actually has. I had to restart to get it to recognize the free space. 
4. The bug causing all this? Likely some bit of the sync code was blowing up, because it didn't expect to get a 'null' back. Which is the kind of a rookie error.

### Apple used to be good at software and user experience.

They used to make high quality software. Now I wonder if they even have a QA department?
