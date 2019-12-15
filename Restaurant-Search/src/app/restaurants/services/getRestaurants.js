const restaurant = require('../models/Restaurants');

const getRestaurants = async (req, res) => {
    console.log(req.query);
    const result = await restaurant.find(req.query);
    //res.status(200).send(result); 
    return result;
};
const getRestaurantsById = async(req,res)=>{
    console.log(req.body);
    const result = await restaurant.find({'res_id':{$in :req.body}});
    return result;
};
const RestaurantService = {
    getRestaurants,
    getRestaurantsById
}
module.exports = RestaurantService;