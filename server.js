// const connection = require('./config/connection.js');
// const express = require('express');
// const path = require('path');
// const fs = require('fs');


// var app = express();
// var PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// require("./controllers/burgers_controller.js")(app);

// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var app = express();

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


