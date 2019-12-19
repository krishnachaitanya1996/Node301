const express = require('express');
const fetchService = require('../services/fetchService');
const restaurantsService = require('../services/restaurantService');
const orderService = require('../services/orderService');
const request = require('request');

const router = express.Router();
const ORDER_URL = "http://localhost:8081/orders/getOrderByResId";
//router.get('/', fetchService.fetchRestaurants);

router.post('/', async (req, res) => {
    await restaurantsService(req, (result) => {
        let result1 = JSON.parse(result).map(a => a.res_id);
        callback(result1,req.body,(body)=>{
            res.send(body);
        });
    });
});


router.post('/fetchBills', async (req, res) => {
    await restaurantsService(req, (result) => {
        let result1 = JSON.parse(result).map(a => a.res_id);
        try{
        callback(result1,req.body,(body)=>{

           var bill =  body.map(a => a.bill).reduce(function(prev, curr){
            return (Number(prev) || 0) + (Number(curr) || 0);
        });
            res.send({location:req.query.location,bill,date:req.body.date});
        });
    }catch(e)
    {
        console.log(e);
        res.send(e);
    }
    
    });
});





module.exports = router;
