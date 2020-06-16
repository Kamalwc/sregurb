const connection = require('./connection.js');

// if you want to log the results of the query in the model all methods have a call back function
const all = (table, eaten, cb) => {
    connection.query(`SELECT * FROM ${table} WHERE eaten = ${eaten}`, (err, results) => {
        if (err) { throw err; }
        cb(results)
    })
};

const postOne = (table, param, cb) => {
    connection.query(`INSERT INTO ${table} (burger_name) VALUES(${param})`, (err, results) => {
        if (err) { throw err; }

        cb(results);
    })
};

const updateOne = (table, param, cb) => {
    connection.query(`UPDATE ${table} SET eaten = true WHERE id = ${param}`, (err, results) => {
        if (err) { throw err; }

        cb(results);
    })
};

const removeOne = (table, param, cb) => {
    connection.query(`DELETE FROM ${table} WHERE id = ${param}`, (err, results) => {
        if (err) { throw err; }

        cb(results);
    })
};

module.exports = {
    all: all,
    postOne: postOne , 
    updateOne: updateOne,
    removeOne: removeOne
 };
