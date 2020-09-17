"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");


routes.get("/activities", (req, res) => {
  let city = req.query.city;
  let interests = req.query.interest;
  console.log("interests:", interests);
  console.log(Array.isArray(interests));
  let time = req.query.tod;
  let kids = req.query.kids;

  if (Array.isArray(interests)) {
    let interest1 = interests[0];
    let interest2 = interests[1];
    let interest3 = interests[2];
    let interest4 = interests[3];
    let interest5 = interests[4];
    let interest6 = interests[5];
    let interest7 = interests[6];
    let interest8 = interests[7];
    let interest9 = interests[8];
    let queryString = `SELECT * FROM activities WHERE ('${interest1}' = ANY (interests) OR '${interest2}' = ANY (interests) OR '${interest3}' = ANY (interests) OR '${interest4}' = ANY (interests) OR '${interest5}' = ANY (interests) OR '${interest6}' = ANY (interests) OR '${interest7}' = ANY (interests) OR '${interest8}' = ANY (interests)) AND city ='${city}' AND '${time}' = ANY (time) AND kids='${kids}' ORDER BY RANDOM() LIMIT 2`;
    pool
      .query(queryString)
      .then((response) => {
        res.json(response.rows);
        console.log("Multiple INTERESTS", response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    let queryString2 = `SELECT * FROM activities WHERE city= '${city}' AND ${time} = ANY (time) and kids='${kids}' AND '${interests}' = ANY (interests) ORDER BY RANDOM() LIMIT 2`;
    pool
      .query(queryString2)
      .then((response) => {
        res.json(response.rows);
        console.log("single interest", response.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});


module.exports = routes;
