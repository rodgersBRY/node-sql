const { createPool } = require("mysql2");

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// mysql2 gives a promise to use async/await
module.exports = pool.promise();
