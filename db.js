const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // vem do Render
  ssl: { rejectUnauthorized: false } // importante no Render
});

module.exports = pool;