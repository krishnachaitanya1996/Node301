const express = require('express');
const winston = require('winston');
const bodyparser = require('body-parser');
const orders = require('./routes/orders');

winston.add(new winston.transports.File({ filename : 'logfile.log'}));

const app = express();

app.use(bodyparser.json());

app.use('/orders',orders);


module.exports = app;