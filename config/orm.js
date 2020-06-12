const connection = require('./connection.js');

// if you want to log the results of the query in the model all methods have a call back function
const findBurgers = (table,eaten, log) => {
        connection.query("SELECT * FROM ? WHERE eaten = ? ", [table , eaten] ,(err,results)=>{
        if(err){throw err;}
        
        log(results);
        })
};

const postOne = (table ,column, param, log) => {
    connection.query(`INSERT INTO ? (?) VALUES(?)`, [table, column, param], (err,results)=>{
        if(err){throw err;}

        log(results);
    })
};

const updateOne = (table ,column, param, log) =>{
    connection.query(`UPDATE ? SET ? = true WHERE id = ?`,[table, column, param], (err,results)=>{
        if(err){throw err;}

        log(results);
    })
};

const removeOne = (table , param, log) =>{
    connection.query(`DELETE FROM ? WHERE id = ?`,[table, param], (err,results)=>{
        if(err){throw err;}

        log(results);
    })
};

module.exports = { 
    findBurgers: findBurgers,
    postOne: postOne , 
    updateOne: updateOne,
    removeOne: removeOne
 };
