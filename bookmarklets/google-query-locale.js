javascript:(function(){
   /* If the current domain is Google */
   if (location.hostname.indexOf('google.com')>-1){
   /* Set variable using a prompt for a city name */
   var localeQuery=prompt('Change locale to:','');
   /* Delete any existing &near= values, update the current URL with new locale */
   location.href=window.location.toString().replace(/&near=[^&]*/,'')+'&near='+localeQuery;}
   /* If the current domain is NOT Google */
      else{
      /* Set variable using a prompt for the query */
   var searchQuery=prompt('Search query:',''),
   /* Set variable using a prompt for the city name */
   localeQuery=prompt('Search locale:','');
   /* Send query to Google */
   location.href='https://www.google.com/search?q='+searchQuery+'&num=10'+'&near='+localeQuery;}
}());


/* Single Line Version */
javascript:(function(){if(location.hostname.indexOf('google.com')>-1){var localeQuery=prompt('Change locale to:','');location.href=window.location.toString().replace(/&near=[^&]*/,'')+'&near='+localeQuery;}else{var searchQuery=prompt('Search query:',''),localeQuery=prompt('Search locale:','');location.href='https://www.google.com/search?q=%27+searchQuery+%27&num=10%27+%27&near=%27+localeQuery;}}());
