// dependencies
const mysql = require('mysql');

// the config info the mysql db connection
// heroku deployment db uri
const connection = mysql.createConnection(process.env.JAWSDB_URL);

// create the connection, throw errors if encountered.
connection.connect(err => {
    if (err) throw err;
    else console.log(`Success! Connected as id ${connection.threadId}.`);
});

// exporting the connection for sure in server.js
module.exports = connection;
