(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		//===== Sticky Menu-Bar Start
		$(window).on('scroll',function(event) {    
			var scroll = $(window).scrollTop();
				if (scroll < 100) {
					$(".header-area").removeClass("sticky");
				}else{
					$(".header-area").addClass("sticky");
				}
			});
		//===== Sticky Menu-Bar End



		//===== For Responsive Menu
		$(".menu-trigger").click(function(){
			$(".menu-trigger, .mainmenu-nav, .overlay-bg").toggleClass("active");
		});
		
		$(".mainmenu-nav li a, .overlay-bg").click(function(){
			$(".menu-trigger, .mainmenu-nav, .overlay-bg").removeClass("active");
		});

		//===== For Scroll Animation
        AOS.init();
			
		

		$(document).ready(function() {
			$('.contact_btn').on('click', function(e) {
			e.preventDefault();
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 200);
			});
		});


	});



    jQuery(window).load(function(){


    });


}(jQuery));	