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



routes.get("/activities", (req, res) => {
  let city = req.query.city;
  let interests = req.query.interest;
  // let atmosphere = req.query.atmosphere;
  // console.log('This is interests!!!!!!!!!!', interests);
  // console.log(req.query.city);
  // SELECT * FROM bars WHERE city='gr' and 'bar' = any(interests)
  let queryString = `SELECT * FROM activities WHERE city='${city}' and '${interests}' = any(interests) and ORDER BY RANDOM() LIMIT 15`;
  pool.query(queryString).then((response) => {
    res.json(response.rows);
  });
});


module.exports = routes;
