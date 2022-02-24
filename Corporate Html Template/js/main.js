
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 2500,
        paginationSpeed : 2500,
        loop:true,
        items : 1, 
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
   
  });
  document.getElementById("para").innerHTML="red";