const orm = require('../config/orm.js');

var burger = {
  allEaten: function(cb) {
    orm.allEaten("burgers", function(res) {
      cb(res);
    });
  },
  allNotEaten: function(cb) {
    orm.allNotEaten("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function( param, cb) {
    orm.create("burgers", param, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
