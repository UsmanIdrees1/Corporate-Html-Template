
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

    /******************************Slider Section End********************/

    $('.animation').each(function(){
        var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
              var animation=$(this.element).attr('data-animation');
              $(this.element).css('opacity','1');
              $(this.element).addClass("animate__animated " + animation);
            },
            offset: '75%' 
          })
    });

        /******************************Portfolio slider section Start********************/

        $(".portfolio-carousel").owlCarousel({
   
            nav : true, // Show next and prev buttons
       dots:false,
            slideSpeed : 300,
            loop:true,
            items : 4,
            autoplay:true,
            autoplayTimeout:3500,
            autoplay:250,
            autoplayHoverPause:true,
            
            responsive:{
                    0:{
                        items:1,
                        nav:true,
                        center:true
                    },
                    500:{
                        items:2,
                        nav:true,
                    },
                
                880:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:4,
                    nav:true
                }
           
        }
       
        });

          /******************************Portfolio slider section End********************/

    /******************************Team Slider Section Start********************/

    $("#team-carousel").owlCarousel({
   
        nav : true, // Show next and prev buttons
   dots:false,
        slideSpeed : 300,
        loop:true,
        items : 4, 
        autoplay:true,
        autoplayTimeout:3500,
        autoplay:250,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            500:{
                items:2,
                nav:true,
            },
        
        880:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true
        }
    }
        
   
    });

     /******************************Team Slider Section End********************/

      /******************************Testimonial Section Start********************/

    $(".testimonial-carousel").owlCarousel({
   
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


     /******************************Testimonial Slider Section End********************/

    /******************************Fixed Header Section Start********************/

    $(window).scroll(function(){
var top=$(window).scrollTop();
if(top>=60){
    $("header").addClass('secondary-dark-blue-bg');
    }
    else{
       if( $("header").hasClass('secondary-dark-blue-bg')){
        $("header").removeClass('secondary-dark-blue-bg');  
       } 
    }
    });

    /******************************Fixed Header Section End********************/
    $('.links').slicknav({
        label:'',
    })
    $('#main').stellar();

   
    $('a').smoothScroll();

   
  });
  