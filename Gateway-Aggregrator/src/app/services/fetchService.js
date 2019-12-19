// const restaurantService = require('./restaurantService');
// const orderService = require('./orderService');
// const request = require('request');

// var req = {
//     }

// const fetchRestaurants = restaurantService(req,(body)=>{
//     console.log(body);
// });  

// const fetchOrders= {
//     fetchRestaurants
// }

// module.exports = fetchOrders;

// // function doCall(urlToCall, callback) {
// //     request(urlToCall, function (err, result,body) {                              
// //         return callback(body);
// //     });
// // }



// // var urlToCall = "http://localhost:8080/search";
// // doCall(urlToCall, function(response){
// //    console.log(response);
// // })


const request = require('request');


const ORDER_URL = "http://localhost:8081/orders/getOrderByResId";


module.exports = callback = (result1,date,returncallback)=>{
    console.log(date);
    request.post({
        headers: { 'content-type': 'application/json' },
        url: ORDER_URL,
        json: { result1, date}
    }, function (error, httpResponse, body) {
        //if(error) returncallback(error);
        returncallback(httpResponse.body);       
    });
}