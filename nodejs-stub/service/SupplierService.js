'use strict';


/**
 * Add a new supplier
 * Adds new supplier to collection
 *
 * body Supplier  (optional)
 * returns Supplier
 **/
exports.addSupplier = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "materials" : [ {
    "name" : "silicon T2",
    "id" : "M0001",
    "type" : "raw"
  }, {
    "name" : "silicon T2",
    "id" : "M0001",
    "type" : "raw"
  } ],
  "name" : "Radiant Electronics",
  "id" : "S001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all suppliers
 * Returns array of suppliers
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getAllSuppliers = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "materials" : [ {
    "name" : "silicon T2",
    "id" : "M0001",
    "type" : "raw"
  }, {
    "name" : "silicon T2",
    "id" : "M0001",
    "type" : "raw"
  } ],
  "name" : "Radiant Electronics",
  "id" : "S001"
}, {
  "materials" : [ {
    "name" : "silicon T2",
    "id" : "M0001",
    "type" : "raw"
  }, {
    "name" : "silicon T2",
    "id" : "M0001",
    "type" : "raw"
  } ],
  "name" : "Radiant Electronics",
  "id" : "S001"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

