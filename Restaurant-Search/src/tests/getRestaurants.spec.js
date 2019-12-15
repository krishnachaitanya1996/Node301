const bluebird = require('bluebird');

//const config = require('../app/restaurants/config/db');
// console.log('***config', config);
console.log("here");
const dbconn = require('../app/restaurants/config/db');
const restaurant = require('../app/restaurants/models/Restaurants');

let mongoose = require("mongoose");



// var restaurantSchema = new mongoose.Schema({
//     name : String,
//     location: String,
//     budget : String,
//     rating : String,
//     menu : [String],
//     cuisine : [String]
// });
// const restaurants = mongoose.model('Restaurant',restaurantSchema,'restaurant');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');

var sinon = require('sinon');
var sinonTest = require('sinon-test');
var test = sinonTest(sinon);


const app = require('../app/restaurants');

let should = chai.should();
const expect = chai.expect;
const supertest = require('supertest');

const getRestaurant = require('../app/restaurants/services/getRestaurants');

// const apptest = supertest(http.createServer(app.callback()));


chai.use(chaiHttp);


describe('/GET /search', () => {

    beforeEach("Establish db connection ", (done) => {
        console.log("waiting for db");
        setTimeout(() => {
            done();
        }, 10000);
    })

    it('it should GET all the Restaurants', (done) => {
      chai.request(app)
          .get('/search')
          .end((err, res) => {
              res.should.have.status(200);
            //   console.log("fjal");
            //   console.log(res);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
            done();
          });
    });
});

