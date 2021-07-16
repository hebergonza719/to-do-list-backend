// Update with your config settings.
require('dotenv').config();


module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  }
};

// {
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
// }