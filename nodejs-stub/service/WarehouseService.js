'use strict';


/**
 * Add a new warehouse
 * Adds a new warehouse to collection
 *
 * body Warehouse  (optional)
 * warehouseID String 
 * returns Warehouse
 **/
exports.addWarehouse = function(body,warehouseID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "location" : "banglore",
  "id" : "W001",
  "type" : "product",
  "items" : [ "", "" ],
  "capacity" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all warehouses
 * Returns array of all warehouses
 *
 * returns List
 **/
exports.getAllWarehouses = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "location" : "banglore",
  "id" : "W001",
  "type" : "product",
  "items" : [ "", "" ],
  "capacity" : 0
}, {
  "location" : "banglore",
  "id" : "W001",
  "type" : "product",
  "items" : [ "", "" ],
  "capacity" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get warehouse by id
 * Returns warehouse object
 *
 * warehouseID String 
 * returns Warehouse
 **/
exports.getWarehouse = function(warehouseID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "location" : "banglore",
  "id" : "W001",
  "type" : "product",
  "items" : [ "", "" ],
  "capacity" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all items stored in warehouse
 * Returns array of items in warehouse
 *
 * warehouseID String 
 * returns List
 **/
exports.getWarehouseItems = function(warehouseID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit warehouse details
 * Updates warehouse details in collection
 *
 * body Warehouse  (optional)
 * warehouseID String 
 * returns Warehouse
 **/
exports.updateWarehouse = function(body,warehouseID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "location" : "banglore",
  "id" : "W001",
  "type" : "product",
  "items" : [ "", "" ],
  "capacity" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add new item to warehouse
 *
 * body Body_1  (optional)
 * warehouseID String 
 * no response value expected for this operation
 **/
exports.warehousesWarehouseIDItemsPUT = function(body,warehouseID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

