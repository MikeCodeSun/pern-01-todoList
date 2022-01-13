const Pool = require("pg").Pool;
require("dotenv").config();

const Todo = new Pool({
  host: "localhost",
  user: "mike",
  password: process.env.DB_PASSWORD,
  database: "pern_todo",
  port: 5432,
});

module.exports = Todo;
