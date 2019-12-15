const winston = require('winston');

module.exports = function (err,req,res,next) {
    winston.error("something failed", err);
    console.log("error occured");
    res.status(500).send("error occured "+ err.message); 
}