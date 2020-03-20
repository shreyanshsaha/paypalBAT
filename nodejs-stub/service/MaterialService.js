'use strict';


/**
 * Add new material by supplier
 *
 * suppID String 
 * returns List
 **/
exports.addMaterial = function(suppID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "silicon T2",
  "id" : "M0001",
  "type" : "raw"
}, {
  "name" : "silicon T2",
  "id" : "M0001",
  "type" : "raw"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Material
 * Deletes a material
 *
 * suppID String 
 * matID String 
 * no response value expected for this operation
 **/
exports.deleleMaterial = function(suppID,matID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all materials
 * Returns array of all materials
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getAllMaterials = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "silicon T2",
  "id" : "M0001",
  "type" : "raw"
}, {
  "name" : "silicon T2",
  "id" : "M0001",
  "type" : "raw"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get material by supplier
 * Returns array of materials for given supplier
 *
 * suppID String 
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getMaterialBySupplier = function(suppID,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "silicon T2",
  "id" : "M0001",
  "type" : "raw"
}, {
  "name" : "silicon T2",
  "id" : "M0001",
  "type" : "raw"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update material details
 * Updates material
 *
 * body Material  (optional)
 * suppID String 
 * matID String 
 * returns Material
 **/
exports.updateMaterial = function(body,suppID,matID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "silicon T2",
  "id" : "M0001",
  "type" : "raw"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

