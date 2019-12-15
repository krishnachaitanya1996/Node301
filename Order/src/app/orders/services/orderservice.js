const order = require('../models/order');
const uuidv1 = require('uuid/v1');

const postOrder = (req, res) => {
    console.log(new Date().toISOString().slice(0,10));
    var order1 = new order({
        orderId: uuidv1(),
        items: req.body.items,
        bill: req.body.items.length * 100,
        customername: req.body.customername,
        date: new Date().toISOString().slice(0,10),
        restaurantId : req.body.restaurantId,
        deliveryaddress: req.body.deliveryaddress
    });
    order1.save((err) => {
        if (err) { return next(err) }
        console.log("order saved");
        res.send(order1)
    })
};



const getAllOrder = async (req,res)=>{
    const allOrders = await order.find();
    res.send(allOrders);
}

const getOrder = async (req,res) =>{
    const Oneorder = await order.find().where('orderId').in(req.params.id).exec();
    res.send(Oneorder);
}

const putOrder = async (req,res)=> {
    req.body.bill = req.body.items.length * 100;
    console.log(req.body.bill);
    req.body.date =new Date().toISOString().slice(0,10);
    const orderId = req.body.orderId;
    delete req.body["orderId"];
    console.log(req.body);
    const modifiedOrder = await order.updateOne({"orderId": orderId},{$set : req.body});
    res.send(modifiedOrder);
}

const getOrdersByResId = async(req,res)=>{
    console.log(req.body.date);
    console.log(req.body);
    const result = await order.find({'restaurantId':req.body.result1,'date':req.body.date.date});
    const re= await order.find();
   res.send(result);
};

const deleteOrder = async (req,res) => {
    console.log(req.params.id);
    const deletedOrder = await order.find({orderId: req.params.id}).remove().exec();
    res.send(deletedOrder);
}

const orderService = {
    postOrder,
    getAllOrder,
    getOrder,
    getOrdersByResId,
    putOrder,
    deleteOrder
}


module.exports = orderService;

