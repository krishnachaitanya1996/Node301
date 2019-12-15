const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    orderId : String,
    items : [String],
    bill : String,
    customername : String,
    date : String,
    restaurantId : String,
    deliveryaddress : String
});


const orders = mongoose.model('Order',orderSchema,'orders');

module.exports = orders;