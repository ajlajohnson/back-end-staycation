"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");

routes.get("/activites", (req, res) => {
  let queryString = `SELECT * FROM activities WHERE city = 'gr' ORDER BY RANDOM() LIMIT 2`;
  pool.query(queryString).then((response) => {
    res.json(response.rows);
  });
});


module.exports = routes;
