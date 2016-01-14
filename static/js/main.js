define(['jquery', 'isotope', 'jquerybridget', 'async!https://maps.google.com/maps/api/js?sensor=false', 'jscrolly', 'waypoints'], function (jquery, Isotope) {
	'use strict';
	(function ($) {



		//this code is for parallax
		$('.countdown_parallax_bg').scrolly({bgParallax: true});
		$('.form_parallax_bg').scrolly({bgParallax: true});


		//this code is for sticky_navbar
		$('.header').stickyNavbar({
			activeClass: "active",
			animDuration: 350,
			startAt: 0,
			mobile: true,
			animateCSS: false,
			stickyModeClass: "sticky fadeInDown animated"
		});


		//this code is for owl-carousel
		$(".branding_carousel").owlCarousel({
			items: 6,
			margin: 110,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
				1200: {
					items: 6
				},
				992: {
					items: 5
				},
				768: {
					items: 4
				},
				300: {
					items: 2,
					margin: 80
				},
				480: {
					items: 3,
					margin: 50
				}
			}
		});


		// this code is for counter up
		$(".counter").counterUp({
			delay: 10,
			time: 2000
		});
		$(".skill_countdown").counterUp({
			delay: 10,
			time: 700
		});


		// this code is for venobox
		$(".portfolio_venobox").venobox({
			titleattr: 'data-title'
		});


		// this code is for isotope
		$.bridget('isotope', Isotope);
		$(".isotop_all_content").isotope();
		$('.mix_trigger ul li').on('click', function () {
			var filterValue = $(this).attr('data-filter');
			$('.isotop_all_content').isotope({
				filter: filterValue,
				percentPosition: true,
				masonry: {
					columnWidth: ''
				}
			});
			$('.mix_trigger ul li').removeClass('active');
			$(this).addClass('active');
		});


		//this code is for scrollspy
		$('body').scrollspy({
			target: '.navbar-collapse',
			offset: 95
		});


		$('.social_icon_btn').on('click', function () {
			$('.header_social_list').addClass('rx');
			$(this).addClass('rx');
		});

		$('.button_close').on('click', function () {
			$('.header_social_list, .social_icon_btn').removeClass('rx');
		});


		//this code is for preloader
		$("body").addClass("preloader_active");

		//this code is for more text
		$("#author_bio_wrap_toggle").on('click', function () {

			$("#author_bio_wrap").slideToggle("slow");

			if ($("#author_bio_wrap_toggle").text() == "Read Less") {
				$("#author_bio_wrap_toggle").html("Read More")
			}
			else {
				$("#author_bio_wrap_toggle").text("Read Less")
			}

		});


		//this code is for mobile-menu
		$("ul.nav.navbar-nav li a").on('click', function () {
			$(".navbar-collapse").removeClass("in");
		});


		//google map
		var myCenter = new google.maps.LatLng(22.6020049,88.341393);

		function initialize() {
			var mapProp = {
				center: myCenter,
				scrollwheel: false,
				zoom: 17,
				styles: [{
					"featureType": "landscape",
					"stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
				}, {
					"featureType": "poi",
					"stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]
				}, {
					"featureType": "road.highway",
					"stylers": [{"saturation": -100}, {"visibility": "simplified"}]
				}, {
					"featureType": "road.arterial",
					"stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]
				}, {
					"featureType": "road.local",
					"stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]
				}, {
					"featureType": "transit",
					"stylers": [{"saturation": -100}, {"visibility": "simplified"}]
				}, {
					"featureType": "administrative.province",
					"stylers": [{"visibility": "off"}]
				}, {
					"featureType": "water",
					"elementType": "labels",
					"stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]
				}, {
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
				}],
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById("my_location"), mapProp);

			var marker = new google.maps.Marker({
				position: myCenter,
				icon: 'static/img/map_maker.png'
			});

			marker.setMap(map);
		}

		google.maps.event.addDomListener(window, 'load', initialize);

	})(jQuery);


//this code is for preloader
	(function ($) {
		"use strict";
// makes sure the whole site is loaded
		$('#preloader').fadeOut(); // will first fade out the loading animation
		$('.preloader_spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$("body").removeClass("preloader_active");
	})(jQuery);


// this code is for wow.js
	new WOW().init();
});