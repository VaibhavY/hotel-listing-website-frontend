new WOW().init();

$(window).scroll(function(){
     if ($(this).scrollTop() > 50)
     {
      $('.header-main ').addClass("sticky");
     }
     else
     {
      $('.header-main').removeClass("sticky");
     
     }

});


$(document).ready(function() {
    
    $('.most_loved_resorts').owlCarousel({
        loop: true,
        margin: 15,
        center: true,
        nav: false,
        dots:true,
        autoplay: true,
        responsive: {
            0: {
                nav: false,
                items:1
            },
            
            600: {
                nav: false,
                items: 1.5
            },
            1000: {
                items: 2
            }
        }
    });

    $('.autoplay3').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots:true,
        items:4,
        autoplay: true,
        responsive: {
            0: {
                items:1.2
            },
            600: {
                items: 2
            },

            700: {
                items: 3
            },

            1000: {
                items: 4
            },
            
        }
    });

    $('.autoplay4').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots:true,
        items:3,
        autoplay: true,
        responsive: {
            0: {
                items:1.2
            },
            600: {
                items: 1.6
            },

            700: {
                items: 2.3
            },

            1000: {
                items: 3
            },
            
        }
    });
	
	$('.featured-clients').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots:true,
        items:4,
        autoplay: true,
        responsive: {
            0: {
                items:1.2
            },
            600: {
                items: 1.6
            },

            700: {
                items: 2.3
            },

            1000: {
                items: 4
            },
            
        }
    });
	
	$('.testimonials-list').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots:true,
        items:1,
        autoplay: true,
        responsive: {
            0: {
                items:1.2
            },
            600: {
                items: 1.6
            },

            700: {
                items: 2.3
            },

            1000: {
                items: 1
            },
            
        }
    });

    $('.autoplay5').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots:true,
        video:true,
        lazyLoad:true,
        items:2,
        autoplay: true,
        responsive: {
            0: {
                items:1
            },
            600: {
                items: 1.3
            },

            700: {
                items: 1.5
            },

            1000: {
                items: 2
            },
            
        }
    });
    

    $('.pick-some-imgslider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:false,
        video:true,
        lazyLoad:true,
        center: true,
        items:8.5,
        autoplay: true,
        responsive: {
            0: {
                items:2.5
            },
            600: {
                items: 4
            },

            700: {
                items: 5.2
            },

            1000: {
                items: 8.5
            },
            
        }
    });
});



