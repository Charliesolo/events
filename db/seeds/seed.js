const format = require('pg-format')
const db = require('../connection.js')

const seed = ({}) => {
    return db
        .query(`DROP TABLE IF EXISTS users;`)
        .then(() => {
            return db.query(`DROP TABLE IF EXISTS users;`)
        })
}