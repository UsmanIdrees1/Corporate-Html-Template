
/******************************Slider Section Start********************/
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

    /******************************Slider Section Start********************/

    /******************************Fixed Header Section Start********************/

    $(window).scroll(function(){
var top=$(window).scrollTop();
if(top>=60){
    $("header").addClass('secondary-dark-blue-bg');
    }
    else{
       if( $("header").addClass('secondary-dark-blue-bg')){
        $("header").removeClass('secondary-dark-blue-bg');  
       } 
    }
    });

    /******************************Fixed Header Section End********************/
   
  });
  