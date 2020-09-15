"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");

// routes.get("/restaurants", (req, res) => {
//   let queryString = `SELECT * FROM restaurants ORDER BY RANDOM() LIMIT 15`;
//   pool.query(queryString).then((response) => {
//     res.json(response.rows);
//   });
// });

routes.get("/restaurants", (req, res) => {
  let city = req.query.city;
  let atmosphere = req.query.atmosphere;
  console.log(req.query.atmosphere);
  let queryString = `SELECT * FROM restaurants WHERE city='${city}' and atmosphere='${atmosphere}' ORDER BY RANDOM() LIMIT 15`;
  pool.query(queryString).then((response) => {
    res.json(response.rows);
  });
});

module.exports = routes;