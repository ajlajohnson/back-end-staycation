"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");

// routes.get("/restaurants", (req, res) => {
//   res.json();
// });

routes.get("/restaurants", (req, res) => {
  let city = req.query.city;
  let atmosphere = req.query.atmosphere;
  let time = req.query.tod;
  let kids = req.query.kids;
  // console.log(city, kids, time, atmosphere);
  let option1 = `SELECT * FROM restaurants WHERE city='${city}' and '${atmosphere}' = ANY (atmosphere) and '${time}' = ANY (time) and kids='${kids}' ORDER BY RANDOM() LIMIT 1`;
  let option2 = `SELECT * FROM restaurants WHERE city='${city}' and '${atmosphere}' = ANY (atmosphere) and '${time}' = ANY (time) ORDER BY RANDOM() LIMIT 1`;
  let queryString = undefined;
  if (kids === 0) {
    queryString = option2;
  } else {
    queryString = option1;
  }
  pool.query(queryString).then((response) => {
    res.json(response.rows);
    // console.log(response.rows);
  });
});

module.exports = routes;
