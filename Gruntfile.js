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
      options: { host: 'localhost' },
      // grunt connect:dev
      dev:  {
        options: {
          port: 3003,
          keepalive: true,
          open: {
            appName: '/Applications/Google Chrome.app'
          }
        }
      },
      // grunt connect:test
      test: {
        options: {
          port: 3004,
          keepalive: false
        }
      }
    },

    // grunt mocha_phantomjs
    mocha_phantomjs: {
      tests: {
        options: {
          reporter: 'json',
          output: 'test_results/suite.json',
          urls: ['http://localhost:3004/specs/suite.html']
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
        src: ['specs/**/*.js'],
        options: {
          jshintrc: 'specs/.jshintrc'
        }
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

    // grunt clean
    clean: {
      test_results: ['test_results']
    }

  });

  // Load task definitions from package.json devDependencies
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');

  // Register alias tasks
  grunt.registerTask('dev',  ['connect:dev'])
  grunt.registerTask('dist', ['jshint', 'uglify'])
  grunt.registerTask('test', ['clean', 'connect:test', 'mocha_phantomjs'])


};
