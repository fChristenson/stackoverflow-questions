# Event binding on dynamically created elements?

I have a bit of code where I am looping through all the select boxes on a page and binding a `.hover` event to them to do a bit of twiddling with their width on `mouse on/off.`

This happens on page ready and works just fine.

The problem I have is that any select boxes I add via Ajax or DOM after the initial loop won't have the event bound.

I have found this plugin (jQuery Live Query Plugin), but before I add another 5k to my pages with a plugin, I want to see if anyone knows a way to do this, either with jQuery directly or by another option.