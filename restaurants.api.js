"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");

routes.get("/restaurants", (req, res) => {
  let queryString = `SELECT * FROM restaurants WHERE city = 'gr' ORDER BY RANDOM() LIMIT 15`;
  pool.query(queryString).then((response) => {
    res.json(response.rows);
  });
});

module.exports = routes;