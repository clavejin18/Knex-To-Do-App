// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require('mysql');

// Set up our connection information
const Knex = require('knex')(require('../knexfile'));

// Export connection
module.exports = Knex;
