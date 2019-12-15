require('dotenv/config');
require('express-async-errors');
const winston = require('winston');
const express = require('express');
const app = require('./app/restaurants/index');
const PORT = process.env.PORT || 8080;
console.log(PORT);
const errorModule = require('./app/restaurants/error-handling/errors')

const dbconn = require('./app/restaurants/config/db');

console.log("here");
app.use(errorModule);

app.listen(PORT,(err,req,res)=>{
    if(err) {
            console.log("Error occured while");
        }
        else
            console.log("listening on port: 8080");
});