/*
 * grunt-hologram
 *
 *
 * Copyright (c) 2014 James Childers
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Clean
		clean: {
			styleguide: ['Resources/Public/StyleGuide/'],
			styles: ['Resources/Public/Styles/'],
			js: ['Resources/Public/Scripts/Build/']
		},

		// Jshint
		jshint: {
			all: [
				'Gruntfile.js',
				'Resources/Public/Scripts/**/*.js'
			],
			options: {
				ignores: [
					'Resources/Public/Scripts/Build/*.js'
				],
				jshintrc: 'Resources/Public/Scripts/.jshintrc',
				reporter: require('jshint-stylish')
			}
		},

		// Concat
		concat: {
			js: {
				src: [
					'Resources/Public/Vendors/jquery/dist/jquery.js',
					'Resources/Public/Vendors/fastclick/lib/fastclick.js',
					'Resources/Public/Scripts/Site.js'
				],
				dest: 'Resources/Public/Scripts/Build/All.js'
			},
			styles: {
				src: [
					'Resources/Public/Vendors/jquery/dist/jquery.js',
					'Resources/Public/Vendors/fastclick/lib/fastclick.js',
					'Resources/Public/Scripts/Site.js'
				],
				dest: 'Resources/Public/Scripts/Build/All.js'
			}
		},

		// Uglify
		uglify: {
			site: {
				files: {
					'Resources/Public/Scripts/Build/All.min.js': ['Resources/Public/Scripts/Build/All.js'],
					'Resources/Public/Scripts/Build/Modernizr.min.js': ['Resources/Public/Vendors/modernizr/modernizr.js']
				}
			}
		},

		// Hologram
		hologram: {
			generate: {
				options: {
					config: './Resources/Private/Styles/hologram_config.yml'
				}
			}
		},

		// Compass
		compass: {
			build: {
				options: {
					config: 'Resources/Private/Styles/config.rb',
					bundleExec: true
				}
			},
			watch: {
				options: {
					config: 'Resources/Private/Styles/config.rb',
					watch: true,
					bundleExec: true
				}
			}
		},

		cssmin: {
			styles: {
				files: [{
					expand: true,
					cwd: 'Resources/Public/Styles/',
					src: ['*.css', '!*.min.css'],
					dest: 'Resources/Public/Styles/',
					ext: '.min.css'
				}]
			},
			options: {
				keepSpecialComments: 0
			}
		},

		// Watch
		watch: {
			styles: {
				files: [
					"Resources/Public/Styles/**"
				],
				tasks: ["build:styleguide", "cssmin:styles"]
			},
			js: {
				files: [
					"Resources/Public/Scripts/**/*.js"
				],
				tasks: ["jshint", "contact"]
			}
		},

		// Concurrent
		concurrent: {
			watch: ['watch', 'compass:watch'],
			options: {
				logConcurrentOutput: true
			}
		}
	});

	grunt.registerTask('work', ['concurrent:watch']);

	grunt.registerTask('build', ['jshint', 'clean', 'compass:build', 'cssmin', 'hologram', 'concat', 'uglify']);

};