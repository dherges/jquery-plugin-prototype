/*!
 * jquery-plugin-prototype
 * https://github.com/dherges/jquery-plugin-prototype
 *
 * Copyright (c) 2015 David Herges
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    bwr: grunt.file.readJSON('bower.json'),

    // grunt connect
    connect: {
      dev: {
        options: {
          host: 'localhost',
          port: 3003,
          keepalive: true,
          open: {
            appName: '/Applications/Google Chrome.app'
          }
        }
      }
    },

    // grunt jshint
    jshint: {
      options: {
        force: true,
        jshintrc: '.jshintrc'
      },
      // grunt jshint:src
      src: {
        src: ['src/**/*.js']
      },
      // grunt jshint:specs
      specs: {
        src: ['specs/**/*.js']
      }
    },

    // grunt uglify
    uglify: {
      // grunt uglify:dist
      dist: {
        src: 'src/**/*.js',
        dest: '<%= bwr.main[0] %>'
      }
    },

    // grunt watch
    watch: {
      // grunt watch:lib
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: []
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('dist', ['jshint', 'uglify'])

};
