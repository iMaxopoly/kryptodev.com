module.exports = function (grunt) {
	"use strict";
	grunt.initConfig({
		concat: {
			cssImport: {
				options: {

					process: function (src, filepath) {
						return "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);@import url(https://fonts.googleapis.com/css?family=Lato:400,100);" + src.replace('@import url(https://fonts.googleapis.com/css?family=Lato:400,100);', '');
					}
				}
			},
			files: {
				'static/dist/css/style.css': ['static/dist/css/stylee.css']
			}
		},
		watch: {
			scripts: {
				files: ['Gruntfile.js', 'views/*.html', 'static/**/*.js', 'static/**/*.css'],
				tasks: ['requirejs', 'cssmin', 'htmlmin']
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1,
				keepSpecialComments: 0
			},
			target: {
				files: {
					'static/dist/css/style.css': [
						'static/fonts/Montserrat-Light.css',
						'static/fonts/Montserrat-Black.css',
						'static/css/animate.min.css',
						'static/css/bootstrap.min.css',
						'static/css/font-awesome.min.css',
						'static/css/jquery.mb.YTPlayer.min.css',
						'static/css/owl.carousel.css',
						'static/css/style.css',
						'static/css/venobox.css'
					]
				}
			}
		},
		htmlmin: {                                     // Task
			dist: {                                      // Target
				options: {                                 // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: {                                   // Dictionary of files
					'_HTMLMIN/blog.html': 'views/blog.html',
					'_HTMLMIN/blogpage.html': 'views/blogpage.html',
					'_HTMLMIN/welcome.html': 'views/welcome.html',
					'_HTMLMIN/404.html': 'views/404.html'
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					uglify2: {
						mangle: false
					},
					baseUrl: "",
					mainConfigFile: "requireMain.js",
					out: "static/dist/js/requireMain.js",
					optimize: "uglify2",
					name: 'requireMain',
					removeCombined: true,
					findNestedDependencies: true,
					preserveLicenseComments: false
				}
			}
		}
	});
	//grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['htmlmin', 'cssmin', 'requirejs']);
};