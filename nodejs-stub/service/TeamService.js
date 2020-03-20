'use strict';


/**
 * Get all teams
 * Returns array of teams
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getAllTeams = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "members" : [ {
    "empID" : "E001",
    "name" : "Employee 1",
    "age" : 25
  }, {
    "empID" : "E001",
    "name" : "Employee 1",
    "age" : 25
  } ],
  "id" : "TA001"
}, {
  "members" : [ {
    "empID" : "E001",
    "name" : "Employee 1",
    "age" : 25
  }, {
    "empID" : "E001",
    "name" : "Employee 1",
    "age" : 25
  } ],
  "id" : "TA001"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get team by ID
 * Returns team object
 *
 * teamID String 
 * returns Team
 **/
exports.getTeam = function(teamID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "members" : [ {
    "empID" : "E001",
    "name" : "Employee 1",
    "age" : 25
  }, {
    "empID" : "E001",
    "name" : "Employee 1",
    "age" : 25
  } ],
  "id" : "TA001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all members in a team
 * Returns array of all members in a team
 *
 * teamID String 
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns Team
 **/
exports.getTeamMembers = function(teamID,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "members" : [ {
    "empID" : "E001",
    "name" : "Employee 1",
    "age" : 25
  }, {
    "empID" : "E001",
    "name" : "Employee 1",
    "age" : 25
  } ],
  "id" : "TA001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

