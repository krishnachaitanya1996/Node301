require('dotenv/config');
require('express-async-errors');
const express = require('express');
const app = require('./app/orders/index');
const PORT = process.env.PORT || 8081;

const dbconn = require('./app/orders/config/db');
const IP_ADDRESS = process.env.IP_ADDRESS || '127.0.0.1';

app.listen(PORT,IP_ADDRESS,(err,req,res)=>{
    if(err) {
            console.log("Error occured while");
        }
        else
            console.log(`listening on port: ${IP_ADDRESS +":"+PORT}`);
});