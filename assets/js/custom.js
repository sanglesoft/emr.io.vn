// Custom JavaScript
$(document).ready(function() {
    "use strict";

	// sticky header
	function headerSticky(){
		var windowPos=$(window).scrollTop();
		if( windowPos>20){
			$('.fixed-top').addClass("on-scroll");
			$('.light-nav-on-scroll').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
			$('.dark-nav-on-scroll').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
		} else {
			$('.fixed-top').removeClass("on-scroll");
			$('.light-nav-on-load').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
			$('.dark-nav-on-load').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
		}
	}
	headerSticky();
	$(window).scroll(headerSticky);
	
	// scrollspy
	$('body').scrollspy({
		offset:	190,
		target:	'.dtr-scrollspy'
	});
	
	// nav scroll	
	if($('#dtr-header-global').length){
		var navoffset = $('#dtr-header-global').height();
		$('.navbar a[href^="#"], .dtr-scroll-link').on("click", function(e) {
			event.preventDefault();  
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - navoffset - 27
			}, "slow","easeInSine");
		});
	} else {
		$('.dtr-scroll-link').on("click", function(e) {
			event.preventDefault();  
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, "slow","easeInSine");
		});
	}
	
	// responsive header nav scroll
	var mnavoffset = $('.dtr-responsive-header').height();
	var scroll = new SmoothScroll('.dtr-responsive-header-menu a', {
		speed: 500,
		speedAsDuration: true,
		offset: mnavoffset + 15
	});

	// responsive menu
	$('.main-navigation .dtr-nav').slicknav({
		label:"",
		prependTo: '.dtr-responsive-header-menu',
		closedSymbol: '',
		openedSymbol: '',
		allowParentLinks:"true",  
		menuButton: '#dtr-menu-button',
		closeOnClick:true
	});
	// responsive scrollspy
	$('.slicknav_nav').addClass("dtr-scrollspy");
			
	// responsive menu button
	$("#dtr-menu-button").on("click", function(e) { 
		$(".slicknav_nav").slideToggle(); 
	}); 
		
	// responsive menu hamburger
	var $hamburger = $("#dtr-menu-button");
		$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
	});
	
	// sectionAnchor
	function sectionAnchor() {
	var navoffset = $('#dtr-header-global').height();
		var hash = window.location.hash;
		if (hash !== '') {
			setTimeout(function() {
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top - navoffset - 30
				}, 800, 'easeInSine');
				history.pushState('', document.title, window.location.pathname);
			}, 500);
		}
	} sectionAnchor();
	
	// responsiveAnchor 
    function responsiveAnchor() {
	var windowWidth=$(window).width();
	if(windowWidth<992){
		var mnavoffset = $('.dtr-responsive-header').height();
			var hash = window.location.hash;
			if (hash !== '') {
				setTimeout(function() {
					$('html, body').stop().animate({
						scrollTop: $(hash).offset().top - mnavoffset - 15
					}, 800, 'easeInSine');
					history.pushState('', document.title, window.location.pathname);
				}, 500);
			}
		} 
	} responsiveAnchor();
	
	// testimonial slider
	$('.dtr-testimonial-style1').slick({
		centerMode: true,
		centerPadding: '150px',
		slidesToShow: 3,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		responsive: [
		{
			breakpoint: 1440,
			settings: {
				centerPadding: '90px',
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1160,
			settings: {
				centerMode: true,
				centerPadding: '30px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 767,
			settings: {
				centerMode: true,
				centerPadding: '30px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				centerMode: true,
				centerPadding: '30px',
				slidesToShow: 1
			}
		}
		]
	});
	
	// testimonial slider
	$('.dtr-testimonial-style-center').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 1000,
		pauseOnHover: false,
	});
	
	// logo slider
	$('.dtr-logo-carousel').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
	});
	
	// bootstrap nav dropdown hover
	$('.nav-item.dropdown, .dropdown-menu, .dropdown-menu a, .nav-link.dropdown-toggle').on('mouseenter', function (e) {
       $('.dropdown-menu, .dropdown').addClass('show');
    }).on('mouseout', function (e) {
       $('.dropdown-menu, .dropdown').removeClass('show');
    });
	
	// wow animations
	if( $(window).outerWidth() >= 767 ) {
		new WOW().init({
			mobile: false,
		});
	}
	
	// parallax
	if( $(window).outerWidth() >= 767 ) {	 
		$(".parallax").parallaxie({
			speed: 0.60,
			size: 'auto',
		});
		$(".parallax.parallax-bg-cover").parallaxie({
			speed: 0.60,
			size: 'cover',
		});
		$(".parallax.parallax-slow").parallaxie({
			speed: 0.30,
		});
	}
	
	// video popup
	$('.dtr-video-popup').venobox(); 
	
	// Popup video
	$(".popup-video").magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		preloader: false,
		fixedContentPos: false
	});

	// Popup image
	$('.popup-image').magnificPopup({
		type: 'image',
	});
	
	// Popup gallery
	$('.popup-gallery').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		gallery: {
			enabled: true
		},
	});
	
	//Contact form
	$(function () {
		var v = $("#contactform").validate({
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					target: "#result",
					clearForm: true
				});
			}
		});
	});
	//To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
	$('#contactform #message').val('');
					
}); // document ready

// on load
$(window).on('load', function(){ 
	// preloader
	$('.dtr-preloader').delay(400).fadeOut(500);
}); // close on load