const mysql = require('mysql2');

//connects to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'go-hoM3!',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;