const mongoose = require('mongoose');

const connstring = process.env.CONNSTRING;

const dbconn = mongoose.connect(connstring, { useNewUrlParser: true , useUnifiedTopology: true } ,(err,db)=>{
    if(err) console.log("error",err);    
});
module.exports = dbconn;
