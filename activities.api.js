"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");

// routes.get("/activites", (req, res) => {
//   let city = req.query.city;
//   console.log(req.query.activities);
//   let queryString = `SELECT * FROM activities WHERE city = '${city}' ORDER BY RANDOM() LIMIT 2`;
//   pool.query(queryString).then((response) => {
//     res.json(response.rows);
//   });
// });



// routes.get("/activities", (req, res) => {
//   let city = req.query.city;
//   let interests = req.query.interest;
//   // let atmosphere = req.query.atmosphere;
//   // console.log('This is interests!!!!!!!!!!', interests);
//   // console.log(req.query.city);
//   // SELECT * FROM bars WHERE city='gr' and 'bar' = any(interests)
//   let queryString = `SELECT * FROM activities WHERE city='${city}' and '${interests}' = any(interests) and ORDER BY RANDOM() LIMIT 15`;
//   pool.query(queryString).then((response) => {
//     res.json(response.rows);
//   });
// });


routes.get("/activities", (req, res) => {
  let city = req.query.city;
  // let atmosphere = req.query.atmosphere;
  let interests = req.query.interest;
  console.log('this is interests', interests);
  let time = req.query.tod;
  let kids = req.query.kids;
  console.log(city, kids, time, interests);

  if (interests.length === 2) {
    let interest1 = interests[0];
    let interest2 = interests[1];
    let queryString = `SELECT * FROM activities WHERE '${interest1}' = ANY (interests) OR '${interest2}' = ANY (interests) AND '${time}' = ANY (time) and kids='${kids}' ORDER BY RANDOM() LIMIT 2`;
    pool.query(queryString).then((response) => {
      res.json(response.rows);
      console.log("THIS IS INTERESTS", response.rows);
    });
  }
  //SELECT * FROM activities WHERE 'music' = ANY (interests) or 'sports' = ANY (interests) or 'creative' = ANY (interests) and city ='d'

  // let option2 = `SELECT * FROM activities WHERE '${interests}' = ANY (interests) and '${time}' = ANY (time) ORDER BY RANDOM() LIMIT 2`;
  // let queryString = undefined;
  // if (kids === 0) {
  //   queryString = option2;
  // } else {
  //   queryString = option1;
  // }
  // pool.query(queryString).then((response) => {
  //   res.json(response.rows);
  //   console.log(response.rows);
  // });
});



module.exports = routes;
