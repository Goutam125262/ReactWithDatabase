const express =require('express');
const mysql=require('mysql');
const cors =require('cors');


const app = express();
app.use(cors());

app.get('/',(re,res)=>{
    return res.json('From backend side')
})
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'W7301@jqir#',
    database:'goutam'
})
app.get('/users',(re,res)=>{
    const sql = "Select * from user";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
       return res.json(data);
    })
})
app.listen(8081,()=>{
    console.log("listening");
})
