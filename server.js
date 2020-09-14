// require the Express module
const express = require("express");
// require the Cors module
const cors = require("cors");
//require the router object (and all it's defined routes) to be used in this file
const routes = require("./routes");
const activities = require("./activities.api");
const bars = require("./bars.api");
const restaurants = require("./restaurants.api");

// const scores = require("./scores.api");
// creates an Express application - allows us to create and and use APIs
const app = express();
// Enable CORS so that this can be used from web-apps on other domains.
app.use(cors());
// Allow JSON request bodies for PUT and POST
app.use(express.json());
//use the the router object (and all it's defined routes)
app.use("/", activities);
app.use("/", bars);
app.use("/", restaurants);
app.use("/", routes);
// define the port
const port = 3000;
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
