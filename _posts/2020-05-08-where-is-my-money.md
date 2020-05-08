---
layout: post
title: It’s like they don’t really want to distribute the money 
description:  How to get your coronavirus relief money, maybe
author: John Phillips
categories: featured other IRS incompetence 
twitter-image: /img/get-my-payment.png
---

Faced with mounting unemployment from the coronavirus, the U.S. government rolled out a relief plan. The plan was to give qualifying citizens, those below certain income thresholds, $1,200, plus $500 per dependent. So far so good, altho I’m not sure how many months of lost income the government thinks $1,200 will cover. 

## How will people get the money? 

The initial message was that if you had paid taxes in 2018 or 2019, and the IRS had your bank account info, you’d get a direct deposit. Otherwise they’d mail you a check. After hearing from friends that got their money, I start checking my bank account.  Nope. Nada. Nothing. No check in the mail.

An email from the Washington Post, their daily coronavirus update I think, explains that you will only get a direct deposit if you got refund. If you owed taxes, you’ll get a check. I paid my year’s taxes via direct deposit, by providing my bank account and routing numbers. This is the exact information The IRS needs to make a direct deposit, but they can’t. Because government, I guess. 

To get my payment quickly, electronically, I would need to visit [a site the IRS has set up](https://www.irs.gov/coronavirus/get-my-payment). Clicking Get My Payment eventually displays this form, after a stern warning that this is for official business only. 

<div>
<img src="{{page.twitter-image}}" class="full-width" alt="Get My Payment">
<p class="caption">The Get My Payment form</p>
</div>

I enter my social, my date of birth, my address, and get an error. **The information entered does not match our records**. I check my info, and try again. Same error. One more attempt and now **it tells me I’m locked out of the system for 24 hours.** Three strikes and you’re out. Loser.

Now I am in what I call a “usability rage.” It happens to those of us in the industry. As a usability professional, I know it didn’t have to work like this. That competent professionals could have been employed to make a usable system. But they were not. 

After some swearing and venting in Slack, I read thru [the FAQ](https://www.irs.gov/coronavirus/get-my-payment-frequently-asked-questions). **There are 28 questions in the FAQ,  to explain how to use a system that than about 10 fields, total.** Always a good sign. I eventually find this:  

“You may want to check your most recent tax return or consider if there is a different way to enter your street address (for example, 123 N Main St vs 123 North Main St).  You may also verify how your address is formatted with the US Postal Service ([USPS](https://tools.usps.com/zip-code-lookup.htm?byaddress)) by entering your address in the USPS ZIP Lookup tool, and then enter your address into Get My Payment exactly as it appears on file with USPS.”

Oh. That’s likely my problem. My address is technically: “3844 N CLAY ST”. Even though it’s usually written “3844 CLAY STREET” or “3844 Clay St.”

How would competent professionals handle this? Mentioning this type of address confusion in the error message would seem like the bare minimum. Skilled professionals would have integrated with the [USPS’s address verification API](https://www.usps.com/business/web-tools-apis/address-information-api.htm#_Toc34052586). 

That’s right, the USPS provides a way to fix these kinds of problems programmatically. No way the IRS team could have known this, tho. Not unless they have access to the google.

## Day 2

OK. I make a note to come back tomorrow and try again. On my second visit, using the “correct address” I am able to get to the second page of the site.

Here they ask me to verify my Adjusted Gross Income and maybe one other item from my tax return. And I can enter my bank account and routing information.

The crack IRS development team has provided two fields for each, one to enter the account number and another to confirm it. Same for the routing information. **And they have disabled copy and paste from working in these fields**. Because security or best practices or some other horseshit. 

**There are no credible usability arguments for doing this**. None. This is a user-hostile anti-pattern.  Copy and paste can cause problems with masked fields. A user may accidentally include one or more spaces at the end of their password, for example. But when entering data in unmasked fields, where you can see what you are typing, there is no reason to disable this. And even with masked fields, there are better ways to handle this. 

Which is more likely, that I will accidentally make an error typing my 10 digit account number or that I will include a space on the end? It’s trivial to remove extra spaces from the ends of strings of text. Literally every programming language provides a function to do this. 

I have my account number and routing number in a text file. I just copied it from my bank’s website. But sure, I'd rather painfully enter them, checking for errors, instead of pasting the vaue I'm 100% certain is correct. Thanks for protecting me from myself, assholes.

After submitting my bank account info, I just have to wait another week. Then I can log back in and see when I can expect my payment. 

## Yeah fine no rush. It’s not an emergency.

Luckily, it isn’t an emergency for me. But for many people it is. They may not be able to make rent, or put food on the table. So good work. Instead of putting his name on the check, Trump should have put his name on this website. Because it is a total fiasco. It it were pale orange, it would be Trump incarnated as a web form, incompetent and hostile. 



