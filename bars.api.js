"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");


routes.get("/bars", (req, res) => {
  let city = req.query.city;
  let interests = req.query.interest;
  // console.log('This is interests!!!!!!!!!!', interests);
  // console.log(req.query.city);
  // SELECT * FROM bars WHERE city='gr' and 'bar' = any(interests)
  let queryString = `SELECT * FROM bars WHERE city='${city}' and '${interests}' = any(interests) ORDER BY RANDOM() LIMIT 15`;
  // let queryString = `SELECT * FROM restaurants WHERE city='${city}'`;
  pool.query(queryString).then((response) => {
    res.json(response.rows);
  });
});


module.exports = routes;
