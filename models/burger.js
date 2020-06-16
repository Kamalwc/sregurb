const orm = require('../config/orm.js');

//a vanilla model groups all the queries of particular table together 
let burgerModel = {
    all: function( eaten,cb ){
        orm.all("burgers", eaten,res => {
            cb(res);
        });
    }, 
    create: function( param, cb ){
        orm.postOne("burgers", param, ()=>{
            cb(res);
        })
    },
    update: function( param, cb ){
        orm.updateOne("burgers", param, ()=>{
            cb(res);
        })
    },
    delete: function( param, cb ){
        orm.removeOne("burgers", param, ()=>{
            cb(res);
        })
    }
}
module.exports = burgerModel;