const POOL = require("pg").Pool;
const dotenv = require("dotenv");

const pool = new POOL({
    connectionString: process.env.DATABASE_URL
});

module.exports = pool;