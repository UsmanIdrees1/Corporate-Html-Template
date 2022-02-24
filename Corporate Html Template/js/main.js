
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 500,
        loop:true,
        items : 1, 
        autoplay:true,
        autoplayTimeout:3500,
        autoplay:250,
        autoplayHoverPause:true,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
   
  });
  document.getElementById("para").innerHTML="red";