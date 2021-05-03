var mysql = require('mysql');

// Create database connection
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_noderestapi'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Connected!');
});
module.exports = conn;