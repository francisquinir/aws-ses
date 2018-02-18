var mysql = require('mysql');

function createDBConnection(){
	return mysql.createConnection({
        host:'yoursqlhost',
        user:'yoursqluser',
        password:'yoursqlpassword',
        database:'yoursqldatabase'
    });
}

module.exports = function(){
    return createDBConnection
}