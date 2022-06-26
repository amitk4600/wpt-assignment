const url=""
let paramters=
{
    host : '127.0.0.1',
    user :'amit',
    password :'cdac',
    database :'exam',
    port : 3306
};

const mysql =require("mysql2");
const connection=mysql.createConnection(paramters);
console.log("Database working");

let resourceName ="production"

connection.query('update resource set resourcename=?',[resourceName],
(error,res)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(res.affectedRows);
    }

}



);
