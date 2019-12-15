
require('express-async-errors');
const winston = require('winston');
const express = require('express');
const app = require('./app/app.js');

app.listen(7001,(err,req,res)=>{
    if(err) {
            console.log("Error occured while");
        }
        else
            console.log("listening on port: 7001");
});