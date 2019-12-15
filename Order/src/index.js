require('express-async-errors');
const express = require('express');
const app = require('./app/orders/index');


const dbconn = require('./app/orders/config/db');


app.listen(8081,(err,req,res)=>{
    if(err) {
            console.log("Error occured while");
        }
        else
            console.log("listening on port: 8080");
});