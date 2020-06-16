const connection = require('./config/connection.js');
const express = require('express');
const path = require('path');
const fs = require('fs');


var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./controllers/burgers_controller.js")(app);

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



