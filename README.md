# InstaLinks
JS Library to make your links load super quick

<h2>Installation</h2>
Just link app.js to your project as normal and it will do the rest.

<h2>But... How?</h2>
It works by using JS events and AJAX to pre-load webpages.

<b>so in more detail</b> 
This works by adding a mouseenter, mouseup, and touchup event to each anchor tag. Mouseenter will trigger an AJAX request to the href specfied by that anchor tag. When the user releases the mouse click or touches up - the body tag gets replaced by the new web page's body tag. 

<h2>To be added</h2>
- Checking if the link is a mail or tel link
- query string support
- testing browser support

<h2>Known Issues</h2>
It's pretty sweet but currently it doesn't play nice with query strings

<h2>Current Status</h2>
Currently it works as it should. I have tested it very little as this was a quick side project but I plan on supporting this further in the future.
