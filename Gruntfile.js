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
