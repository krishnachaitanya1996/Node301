const express = require('express');
const orderService = require('../services/orderService');

const router = express.Router();

router.post('/postOrder',orderService.postOrder);
//router.get('/getAllOrder',orderService.getAllOrder);
router.get('/getAllOrder', async (req,res)=> {
    const result = await orderService.getAllOrder(req,(result)=>{
        console.log("gf",result);
        res.send(result);
    });
    // console.log("gf",result.body);
    // res.send(result.body);
});
router.get('/getOrder/:id',orderService.getOrder);
router.put('/putOrder',orderService.putOrder);
router.delete('/deleteOrder/:id',orderService.deleteOrder);

module.exports = router;