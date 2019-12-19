const request = require('request');

const url = require('url');

var ORDER_URL = "http://localhost:8081/"
const postOrder = (req, res) => {
    ORDER_URL = "http://localhost:8081/" + "orders/postOrder";
    console.log(ORDER_URL);
    console.log(req.body);
    request.post({
        headers: { 'content-type': 'application/json' },
        url: ORDER_URL,
        json : req.body
    }, function (error, httpResponse, body) {
        console.log(error);
        res.send(httpResponse.body);
        if(error) returncallback(error);
    });
};


const getAllOrder = async (req, callback) => {
    console.log(req.params.id);    
    ORDER_URL = "http://localhost:8081/" + "orders/getAllOrder/";
    request(ORDER_URL,(err,result,body)=>{
        console.log(body);
        callback(body);
        //res.send(body);
        if(err) returncallback(err);
    })
}

const getOrder = async (req, res) => {
    console.log(req.params.id);    
    ORDER_URL = "http://localhost:8081/" + "orders/getOrder/"+ req.params.id;
    console.log("hejrk",ORDER_URL);
    request(ORDER_URL,(err,result,body)=>{
        console.log(body);
        res.send(body);
        if(err) returncallback(err);
    })
}

const putOrder = async (req, res) => {
    ORDER_URL = "http://localhost:8081/" + "orders/putOrder";
    console.log(ORDER_URL);
    console.log(req.body);
    request.put({
        headers: { 'content-type': 'application/json' },
        url: ORDER_URL,
        json : req.body
    }, function (error, httpResponse, body) {
        console.log(error);
        res.send(httpResponse.body);
        if(error) returncallback(error);
    });
}

const deleteOrder = async (req, res) => {
    ORDER_URL = "http://localhost:8081/" + "orders/deleteOrder/"+  req.params.id;
    console.log(ORDER_URL);
    console.log(req.body);
    request.delete({
        headers: { 'content-type': 'application/json' },
        url: ORDER_URL,
        json : req.body
    }, function (error, httpResponse, body) {
        console.log(error);
        res.send(httpResponse.body);
        if(error) returncallback(error);
    });
}

const orderService = {
    postOrder,
    getAllOrder,
    getOrder,
    putOrder,
    deleteOrder
}

module.exports = orderService;