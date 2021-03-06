const knex = require('knex');

const knexConfig = require('../knexfile.js');

// this is from .env
const environment = process.env.DB_ENV || 'development';

// exporting knex instance with knex config
module.exports = knex(knexConfig[environment]);