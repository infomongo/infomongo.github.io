---
layout: post
title: Using Webhooks in Inversoft Passport
description: Using the power of webhooks to easily respond to changes in data.
author: John Phillips
categories: other development
twitter-image: /img/passport-webhook-spiderweb.jpg
---

<div>
<img src="{{page.twitter-image}}" class="full-width" alt="Spiderweb strung between two plants">
</div>

I wrote another post for the good folks at [Inversoft][inv]. This one is about [using a webhook to respond to an event][post]. 

Honestly, I was not that familiar with webhooks until I wrote the post and they are pretty cool. No wonder this  approach is gaining popularity. 

## What Is A Webhook?

A webhook is a way to subscribe to an event. When the event occurs, your application gets notified. Webhooks provide real-time notifications. Instead of having to poll an API and watch for changes, you get notified when they occur.

In Passport, here's how it works: You attach a webhook to one or more events in the system. In the post, we attach a webhook to the `user.delete` event. When this event occurs, Passport posts a JSON payload to a URL you specify.

In your app, you create a route for that URL and respond when it gets called. The JSON contains information about the event.

In effect, you have created a callback, a simple messaging system between two web apps. 

[Learn more about using webhooks in Inversoft Passport][post].


[inv]: https://www.inversoft.com/
[post]: https://www.inversoft.com/blog/2018/05/22/using-webhooks-in-passport-delete-user-data/?utm_source=webhook&utm_medium=jp&utm_campaign=postshare
