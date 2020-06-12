const express = require('express');
const app = express();

const burgerModel = require('../models/burger.js');
const orm = require('../config/orm.js')

//create router 

//post new burger to db
app.post('/api/burgers', (req,res)=>{
    if (err) return res.status(500).end();

    model.create('burger_name', req.body.burgers, ()=>{
        res.json({data: results});
    })
})

//get all burgers that are not eaten 
app.get('/api/freshburgers', (req,res)=>{
    if (err) return res.status(500).end();
        burgerModel.findBurgers(false,()=>{
            res.json({data: results});
        })
})
//get all burgers that have been eaten
app.get('/api/eatenburgers', (req,res)=>{
    if (err) return res.status(500).end();
        burgerModel.findBurgers(true,()=>{
            res.json({data: results});
        })
})

//update a selected burger thats not eaten to eaten
app.put('/api/burgers:id',(req,res)=>{
    if (err) return res.status(500).end();

    const id = req.params
    burgerModel.update(id,true,()=>{
        res.json({});
    })
})
// delete a selected burger from the database
app.delete('/api/burgers:id', (req,res)=>{
    if (err) return res.status(500).end();

    const id = req.params;
    orm.removeOne('burgers', id);
})

//WHY DO I NEED TO DO THIS????
//export the router at the end of your file 