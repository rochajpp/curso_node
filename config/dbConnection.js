var mysql = require('mysql2');

var connect = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'database',
        database : 'portal_noticias'
        });
    
}
module.exports = () =>{
    return connect;
};