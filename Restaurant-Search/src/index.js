require('dotenv/config');
require('express-async-errors');
const winston = require('winston');
const express = require('express');
const app = require('./app/restaurants/index');
const PORT = process.env.PORT || 8080;
const IPADRESS = process.env.IPADRESS || '127.0.0.1' ;
const errorModule = require('./app/restaurants/error-handling/errors')

const dbconn = require('./app/restaurants/config/db');

console.log("here");
app.use(errorModule);

app.listen(PORT,IPADRESS,(err,req,res)=>{
    if(err) {
            console.log("Error occured while");
        }
        else
            console.log(`listening on port:${IPADRESS +":"+ PORT}`);
});