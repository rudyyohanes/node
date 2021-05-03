var mysql = require('mysql');
const Sequelize = require('sequelize');

// Create database connection
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_noderestapi'
})

const sequelize = new Sequelize('db_noderestapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Connected!');
});
module.exports = conn;