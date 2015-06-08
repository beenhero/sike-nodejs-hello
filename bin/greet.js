#!/usr/bin/env node

var parseArgs = require('minimist');
var greet = require('../index');

var argv = parseArgs(process.argv.slice(2));
console.log(greet(argv._, !!argv.drunk));