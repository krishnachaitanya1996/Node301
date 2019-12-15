const express = require('express');
const router = express.Router();
const orderService = require('../services/orderservice');


// router.post('/', (req,res)=> {
//     console.log(req.body);
//     res.send('Hello world');
// });
router.post('/postOrder',orderService.postOrder);
router.get('/getAllOrder',orderService.getAllOrder);
router.get('/getOrder/:id',orderService.getOrder);
router.post('/getOrderByResId',orderService.getOrdersByResId);
router.put('/putOrder',orderService.putOrder);
router.delete('/deleteOrder/:id',orderService.deleteOrder);

module.exports = router;