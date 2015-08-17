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
        force: true
      },
      // grunt jshint:gruntfile
      gruntfile: {
        options: {
          // .jshintrc from grunt-init-plugin-example
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      // grunt jshint:lib
      lib: {
        options: {
          // .jshintrc from grunt-init-plugin-example
          jshintrc: 'lib/.jshintrc'
        },
        src: ['lib/**/*.js']
      },
      // grunt jshint:specs
      specs: {
        options: {
          // .jshintrc from grunt-init-plugin-example
          jshintrc: 'specs/.jshintrc'
        },
        src: ['specs/**/*.js']
      }
    },

    // grunt uglify
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      // grunt uglify:dist
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/xcsrf.min.js'
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

};
