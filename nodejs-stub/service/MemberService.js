'use strict';


/**
 * Get all members
 * Returns array of all members
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getAllMembers = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "empID" : "E001",
  "name" : "Employee 1",
  "age" : 25
}, {
  "empID" : "E001",
  "name" : "Employee 1",
  "age" : 25
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get member by ID
 * Returns member object
 *
 * empID String 
 * returns Member
 **/
exports.getMember = function(empID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "empID" : "E001",
  "name" : "Employee 1",
  "age" : 25
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

