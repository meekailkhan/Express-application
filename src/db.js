const pgp = require("pg-promise")();

const db = pgp({
    host : process.env.HOST,
    port :  process.env.PORT,
    database :  process.env.DATABASE,
    user :  process.env.USER,
    password :  process.env.PASSWORD
})

module.exports = db;
