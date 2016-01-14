require.config({
	paths: {
		'async'             : 'static/js/async',
		'jquery'            : 'static/js/jquery-1.11.3.min',
		'jquerybridget'     : 'static/js/jquery.bridget',
		'bootstrap'         : 'static/js/bootstrap.min',
		'wow'               : 'static/js/wow.min',
		'isotope'           : 'static/js/isotope.pkgd.min',
		'jcounterup'        : 'static/js/jquery.counterup.min',
		'jeasing'           : 'static/js/jquery.easing.1.3.min',
		'jscrolly'          : 'static/js/jquery.scrolly',
		'jstickynav'        : 'static/js/jquery.stickyNavbar.min',
		'owl'               : 'static/js/owl.carousel.min',
		'venobox'           : 'static/js/venobox.min',
		'waypoints'         : 'static/js/waypoints.min',
		'main'              : 'static/js/main'
	},
	shim: {
		'jquery'            : {exports: '$'},
		'jquerybridget'     : ['jquery'],
		'bootstrap'         : ['jquery'],
		'wow'               : ['jquery'],
		'isotope'           : ['jquery', 'jquerybridget'],
		'jcounterup'        : ['jquery'],
		'jeasing'           : ['jquery'],
		'jscrolly'          : {deps: ['jquery'], exports: 'scrolly'},
		'jstickynav'        : ['jquery'],
		'owl'               : ['jquery'],
		'venobox'           : ['jquery'],
		'waypoints'         : ['jquery'],
		'main'              : ['wow', 'isotope', 'jcounterup', 'bootstrap',
			'jeasing', 'jscrolly', 'jstickynav',
			'owl', 'venobox', 'waypoints']

	},
	priority: [
		"jquery"
	]
});


require(['main']);