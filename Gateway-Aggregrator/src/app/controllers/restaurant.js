const express = require('express');
const restaurantsService = require('../services/restaurantService');

const router = express.Router();


//router.get('/', restaurantsService);

router.get('/', async (req,res)=> {
    await restaurantsService(req,(result)=>{
        console.log("gf1",result);
        res.send(result);
    });
});

module.exports = router;