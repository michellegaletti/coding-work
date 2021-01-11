jQuery(document).ready(function($) {
   $.ajax({
      url: "https://api.aerisapi.com/observations/breckenridge,co?client_id=qaZTip9LfJPrtkQAXjsdO&client_secret=BUkJrgUsXwDS0ffOonlmQHdAZYnD4KO9yLV99mUO"
   })
   .done(function(json) {
         if (json.success == true) {
            var ob = json.response.ob;
            console.log(ob);
            $('#weatherhere').html('<span class = "locwe"> Breckenridge, CO </span><span class="weather">'+ ob.weather.toLowerCase() + '</span><span class="temp">' + ob.tempF + '&deg;'+ '</span><span class="windchill">'+ ob.windchillF + '&deg;' + '</span><span class="precipitation">' + ob.precipIN + ' in</span>');
         }
         else {
            alert('An error occurred: ' + json.error.description);
         }
     });
});