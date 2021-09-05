// Update with your config settings.
require('dotenv').config();


module.exports = {
  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_PUCE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  }
};

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: { 
//       database: process.env.KNEX_DATABASE,
//       user:     process.env.KNEX_USER,
//       password: process.env.KNEX_PASSWORD 
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: { directory: './database/seeds' },
//   }
// };