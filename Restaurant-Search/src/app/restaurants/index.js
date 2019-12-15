const winston = require('winston');
const express = require('express');
const getRestaurants = require('./routes/search');
const bodyparser = require('body-parser');
const errorHandler = require('./error-handling/errors');
const app = express();


winston.add(new winston.transports.File({ filename : 'logfile.log'}));

//const logger = winston.createLogger({ transports : [new winston.transports.File({filename: 'error.log'})]});
app.use(bodyparser.json());
app.use('/',getRestaurants);



app.use(errorHandler);

module.exports = app;
