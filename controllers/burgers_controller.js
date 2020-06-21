// const express = require('express');
// const app = express();

// const burgerModel = require('../models/burger.js');
// const orm = require('../config/orm.js')

// //create router 
// module.exports = function (app) {
//     //post new burger to db
//     app.post
//     ('/api/burgers', (req, res) => {
//         burgerModel.create(req.body.burgers, data => {
//             res.json({burgers: data});
//         })
//     })

//     //get all burgers that are not eaten 
//     app.get('/api/freshburgers',(req, res) =>{
//          burgerModel.all(false, data =>{
//             res.json({burgers: data});
//         }); 
//     })

//     //get all burgers that have been eaten
//     app.get('/api/eatenburgers',(req, res) =>{
//         burgerModel.all(true, data =>{
//            res.json({burgers: data});
//        }); 
//     })

//     //update a selected burger thats not eaten to eaten
//     app.put('/api/burgers:id', (req, res) => {
//         const id = req.params.id;
//         burgerModel.update(id, true, data => {
//             res.json({burgers: data});
//         })
//     })

//     // delete a selected burger from the database
//     app.delete('/api/burgers:id', (req, res) => {
//         const id = req.params;
//         orm.delete('burgers', id, data =>{
//             res.json({burgers: data});
//         });
//     })

//     app.get('*',(req, res)=>{
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     })

// }

// //WHY DO I NEED TO DO THIS???? --> becuase you must import the routes in the server.js file to separaye the server and rotues files

var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Create all our routes and set up logic within those routes where required.
router.get("/api/freshburgers", function (req, res) {
  burger.allNotEaten(function (data) {
    res.json({ burgers: data });
  });
});

router.get("/api/eatenburgers", function (req, res) {
  burger.allEaten(function (data) {
    res.json({ burgers: data });
  });
});


router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function (result) {
    // Send back the ID of the new burger
    res.json({ id: result.id });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update(req.params.id, (result) =>{
    res.json(result)
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
