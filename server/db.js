const POOL = require("pg").Pool;
const dotenv = require("dotenv");
const pool = new POOL({
    connectionString: "postgres://playabook:8896@localhost:5432/jpay"
});

module.exports = pool;