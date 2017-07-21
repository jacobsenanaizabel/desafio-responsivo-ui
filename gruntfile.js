module.exports = function(grunt) {

	// Grunt config
	grunt.initConfig({

		//Mimificando css
		cssmin: {
			target: {
				files: {
					'content/css/min/style.min.css': [
						'content/css/main.css',
						'content/css/mobile.css'
					]
				}
			}
		},
		//Server
		connect: {
			server: {
				options: {
					port: 9001,
					base:'.',
					hostname: 'localhost',
					livereload: true
				}
			}
		},
		//Watch
	    watch: {
			options:{
				livereload: true
			},
	    	cssmin: {
	    		files: 'content/css/*.css',
	    		tasks: 'css'
	    	}
		}
	});

	//Plugins
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');


	//Tasks
	grunt.registerTask('css', ['cssmin']);
	grunt.registerTask('live', ['connect', 'watch']);

};