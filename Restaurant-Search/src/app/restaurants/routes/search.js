const express = require('express');
const RestaurantsService = require('../services/getRestaurants');

const router = express.Router();


router.get('/search', async (req,res)=>{
    console.log('inside search');
    const result = await RestaurantsService.getRestaurants(req,res);
    console.log(result);
    //res.status(200).send(result); 
    res.status(200).json(result);
});

router.post('/searchById', async (req,res)=>{
    const result = await RestaurantsService.getRestaurantsById(req,res);
    console.log(result);
    //res.status(200).send(result); 
    res.status(200).json(result);
});


module.exports = router;