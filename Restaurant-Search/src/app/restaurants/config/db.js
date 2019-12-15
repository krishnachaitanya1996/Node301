require('dotenv/config');
const mongoose = require('mongoose');

const connstring =process.env.MONGOURL;
console.log(connstring);

const dbconn = mongoose.connect(connstring, { useNewUrlParser: true , useUnifiedTopology: true } ,(err,db)=>{
    if(err) console.log("error", err); 
    if(db) console.log("connected to db");   
});


// const dbconn = mongoose.connect(connstring);
// db.then((db)=>{
//     console.log("connected to db")
// },(err)=>{
//     console.log("error",err); 
// })
module.exports = dbconn;

