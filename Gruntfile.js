#!/usr/bin/env node


/*!
 * d3-start-up®
 * A ready to go scaffolding to work on d3.
 * ____________________________________________________________________
 * Grunt, http://gruntjs.com/.
 * The JavaScript Task Runner.
 * ____________________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ____________________________________________________________________
 * @date      : 04-Nov-2016
 * @license   : MIT
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-cli
 * @build     : SEED™: Umeå
 *              |---- A Sequømics Product.
 * ____________________________________________________________________
 *
 * --/The Heart of Build System/-- of "d3-start-up®".
 * ____________________________________________________________________
 */

// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

"use strict";

// Load required NPM module.
var chalk = require('chalk');

// Default color defined.
var noop  = chalk.red;
var yeep  = chalk.green;
var okay  = chalk.blue;

// ----------------------------------------------------------------------------
// All Grunt Operations Defined...  | 05/November/2016 | Prabhat Kumar.
// ----------------------------------------------------------------------------

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    /* reading 'package.json' for sync package(s) updates, mainly. */
    pkg: grunt.file.readJSON('package.json'),
    
    // JavaScript --> 1.0 Hint
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          d3: true,
          Modernizr: true,
          jQuery: true
        },
        strict: true,
      },
      ignore_warning: {
        options: {
          '-W015': true // [L24:C9] W015: Expected '}' to have an indentation at 11 instead at 9.
        }
      },
      all: [
        './Gruntfile.js',
        './core/source/script/d3.nifty.js',
        './core/source/script/d3.startup.js',
        '!node_modules/**/*.js' // ignores node_modules.
      ]
    },
    // JavaScript --> 1.1 Minify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - author: <%= pkg.author %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      my_target: {
        options: {
          sourceMap: false,
        },
        files: {
          'build/script/d3.nifty.min.js': ['./core/source/script/d3.nifty.js'],
          'build/script/d3.startup.min.js': ['./core/source/script/d3.startup.js']
        }
      }
    }
  });
  var msg =
      '-------------------------------------------\n' +
      ' SEED™: Umeå\n' +
      ' A Sequømics Product, http://sequomics.com/\n' +
      '-------------------------------------------';
  var today = new Date();
  
  grunt.log.writeln(yeep(msg));
  grunt.log.writeln(okay(today));
  
  // These plugins provide necessary tasks.
  // --------------------------------------
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // "Grunt" runs these tasks.
  // -------------------------
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['jshint', 'uglify']);
  
  // Default task.
  // -------------
  grunt.registerTask('default', ['test']);
};
