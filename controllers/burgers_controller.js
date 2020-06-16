const express = require('express');
const app = express();

const burgerModel = require('../models/burger.js');
const orm = require('../config/orm.js')

//create router 
module.exports = function (app) {
    //post new burger to db
    app.post
    ('/api/burgers', (req, res) => {
        burgerModel.create(req.body.burgers, data => {
            res.json({burgers: data});
        })
    })

    //get all burgers that are not eaten 
    app.get('/api/freshburgers',(req, res) =>{
         burgerModel.all(false, data =>{
            res.json({burgers: data});
        }); 
    })

    //get all burgers that have been eaten
    app.get('/api/eatenburgers',(req, res) =>{
        burgerModel.all(true, data =>{
           res.json({burgers: data});
       }); 
    })

    //update a selected burger thats not eaten to eaten
    app.put('/api/burgers:id', (req, res) => {
        const id = req.params.id;
        burgerModel.update(id, true, data => {
            res.json({burgers: data});
        })
    })

    // delete a selected burger from the database
    app.delete('/api/burgers:id', (req, res) => {
        const id = req.params;
        orm.delete('burgers', id, data =>{
            res.json({burgers: data});
        });
    })

    app.get('*',(req, res)=>{
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

}

//WHY DO I NEED TO DO THIS???? --> becuase you must import the routes in the server.js file to separaye the server and rotues files