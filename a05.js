const url=""
let paramaters={
    host : '127.0.0.1',
    user :'amit',
    password :'cdac',
    database :'exam',
    port : 3306
};

const mysql=require("mysql2");
const connection=mysql.createConnection(paramaters);
console.log(" working...... ");

let resourceNo=1;
connection.query("select resourcename, status from resource where  resourceno=?",
[resourceNo],
(error,rows)=>{
    if (error) {
        console.log(error);  
    } else if(rows.length>0) {
        console.log(rows);   
       
    }

});