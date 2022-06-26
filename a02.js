const url="";
let dbparams=
{
    host : '127.0.0.1',
    user :'amit',
    password :'cdac',
    database :'exam',
    port : 3306

}; 
const mysql = require('mysql2');
const connection=mysql.createConnection(dbparams);
console.log("db started");


let id ='2';  
let name ='rice'; 
let price ='60'; 
let category ='food';

connection.query('insert into item(id,name,price,category) values (?,?,?,?)', [id,name,price,category], 
(err, res1) => {
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);