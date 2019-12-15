const request = require('request');
var http = require('http');
const url = require('url');


//var RESTAURANT_URL = "http://localhost:8080/search";


const getRestaurants = async (req,callback)=>{   
    console.log("params",url.parse(req.url).query);
    const query = url.parse(req.url).query;
    if(query!=null)
        var RESTAURANT_URL = "http://localhost:8080/search"+"?"+query;
    else
        var RESTAURANT_URL = "http://localhost:8080/search";
    console.log(RESTAURANT_URL);
    request(RESTAURANT_URL, (err,result,body)=>{ 
        console.log(body);    
        return callback(body);
        if(err) returncallback(err);
    })
}
module.exports = getRestaurants;