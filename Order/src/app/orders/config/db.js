const mongoose = require('mongoose');

const connstring = "mongodb://krishna:krishna99@ds253348.mlab.com:53348/node301";

const dbconn = mongoose.connect(connstring, { useNewUrlParser: true , useUnifiedTopology: true } ,(err,db)=>{
    if(err) console.log("error",err);    
});
module.exports = dbconn;
