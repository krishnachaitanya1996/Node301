const winston = require('winston');
const express = require('express');
const restaurantController = require('./controllers/restaurant')
const orderController = require('./controllers/order');
const fetchController = require('./controllers/fetch');
//const errorHandler = require('./error-handling/errors');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());


winston.add(new winston.transports.File({ filename : 'logfile.log'}));


app.use('/search',restaurantController);
app.use('/orders',orderController);
app.use('/fetch',fetchController);


//app.use(errorHandler);

module.exports = app;
