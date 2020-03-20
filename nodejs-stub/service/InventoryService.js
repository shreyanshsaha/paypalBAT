'use strict';


/**
 * Add inventory item
 * Adds a new item to inventory collection
 *
 * body Inventory  (optional)
 * returns Inventory
 **/
exports.addInventory = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemID" : "M0001",
  "inventoryType" : "material",
  "quantity" : 100,
  "storageType" : "warehouse",
  "id" : "I001",
  "storageID" : "W001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all inventory items
 * Returns array of inventory items
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getAllInventory = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "itemID" : "M0001",
  "inventoryType" : "material",
  "quantity" : 100,
  "storageType" : "warehouse",
  "id" : "I001",
  "storageID" : "W001"
}, {
  "itemID" : "M0001",
  "inventoryType" : "material",
  "quantity" : 100,
  "storageType" : "warehouse",
  "id" : "I001",
  "storageID" : "W001"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get inventory item
 * Returns an inventory object
 *
 * invID String ID of inventory item
 * returns Inventory
 **/
exports.getInventory = function(invID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemID" : "M0001",
  "inventoryType" : "material",
  "quantity" : 100,
  "storageType" : "warehouse",
  "id" : "I001",
  "storageID" : "W001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete inventory item
 *
 * invID String ID of inventory item
 * no response value expected for this operation
 **/
exports.inventoryInvIDDELETE = function(invID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update inventory item
 * Returns an inventory object
 *
 * body Inventory  (optional)
 * invID String ID of inventory item
 * returns Inventory
 **/
exports.updateInventory = function(body,invID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemID" : "M0001",
  "inventoryType" : "material",
  "quantity" : 100,
  "storageType" : "warehouse",
  "id" : "I001",
  "storageID" : "W001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

