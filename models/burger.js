const orm = require('../config/orm.js');

//a vanilla model groups all the queries of particular table together 
const burgerModel = {
    all: function(cb){
        orm.findBurgers('burgers', eaten, ()=>{
            cb(res);
        })
    }, 
    create: function(cb){
        orm.postOne('burgers', column, param, ()=>{
            cb(res);
        })
    } ,
    update: function(cb){
        orm.updateOne('burgers', column, param, ()=>{
            cb(res);
        })
    },
    delete: function(cb){
        orm.removeOne('burgers', param, ()=>{
            cb(res);
        })
    }
}
module.exports = burgerModel;