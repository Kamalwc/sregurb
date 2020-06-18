// const connection = require('./connection.js');

// // if you want to log the results of the query in the model all methods have a call back function
// const all = (table, eaten, cb) => {
//     connection.query(`SELECT * FROM ${table} WHERE eaten = ${eaten}`, (err, results) => {
//         if (err) { throw err; }
//         cb(results)
//     })
// };

// const postOne = (table, param, cb) => {
//     connection.query(`INSERT INTO ${table} (burger_name) VALUES(${param})`, (err, results) => {
//         if (err) { throw err; }

//         cb(results);
//     })
// };

// const updateOne = (table, param, cb) => {
//     connection.query(`UPDATE ${table} SET eaten = true WHERE id = ${param}`, (err, results) => {
//         if (err) { throw err; }

//         cb(results);
//     })
// };

// const removeOne = (table, param, cb) => {
//     connection.query(`DELETE FROM ${table} WHERE id = ${param}`, (err, results) => {
//         if (err) { throw err; }

//         cb(results);
//     })
// };

// module.exports = {
//     all: all,
//     postOne: postOne , 
//     updateOne: updateOne,
//     removeOne: removeOne
//  };

// Import MySQL connection.
var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string") {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  allEaten: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + " WHERE eaten = true;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  allNotEaten: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + " WHERE eaten = false;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: (table, param, cb) => {
        connection.query(`UPDATE ${table} SET eaten = true WHERE id = ${param}`, (err, results) => {
            if (err) { throw err; }
    
            cb(results);
        })
    }
  ,
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};


// orm.all('burgers');
module.exports = orm;
