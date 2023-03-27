// SEND TO NOTES FROM THE EDGE
// Bookmarklet to capture URLs, titles, and any selected text to a Google Sheets form
// Intended for use for capturing news items for Edgy Labs’ Newsletter: SEO Notes from the Edge
// Created: 03/27/2023 08:02 AM
// Updated: 03/27/2023 8:22 AM
	// Saved to GitHub
	// Removed TLD deletion

// var domain = location.hostname.toString().replace(/(www\.|\.com|\.net|\.org)/g,'').replace(/^\w/, c => c.toUpperCase());
var domain = location.hostname.toString().replace(/^\w/, c => c.toUpperCase());
var utmPattern = /(\?|&)(utm_[^&=]+=[^&]*)/gi;
var wUrl = encodeURIComponent(location.href.replace(utmPattern, ''));
var wTitle=encodeURIComponent(document.title + " | " + domain);
var wDescription = document.querySelector('meta[name="description"]');
var wSelection=encodeURIComponent(window.getSelection().toString().replace(/\s+/g,' ').trim());
var formId="1FAIpQLScdXhUEd6FrkzSRgz3zakxyAquPDZ6ZiK_41_19JUxA0cd81A";
var formUrl="https://docs.google.com/forms/d/e/"+formId+"/viewform";
var data={
	"entry.623797088":wTitle,
	"entry.2082543780":wUrl,
	"entry.1564268661":wSelection
};
if (wDescription !== null) {data["entry.1626307794"] = wDescription.getAttribute("content");};
var params=Object.keys(data).map(function(key){return key+"="+data[key];}).join("&");
var url=formUrl+"?"+params;
var newWin=window.open("","Bookmarker");
newWin.document.write("<script>window.stop();</script>");
newWin.location.href=url;