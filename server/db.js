const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "8324",
  database: "Praveen",
  port: 5432,
  host: "localhost",
});

module.exports = pool;