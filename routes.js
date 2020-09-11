// require the Express module
const express = require("express");
const fetch = require("node-fetch")
//creates a new router object
const routes = express.Router();



routes.get("/results", (req, res) => {
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.query.place_id}&key=${req.query.key}`).then(r => r.json()).then(result => res.json(result));
});






module.exports = routes;