'use strict';


/**
 * Add a new product to store
 * Adds a new product to store collection
 *
 * body Body  (optional)
 * storeID String 
 * returns Product
 **/
exports.addProductToStore = function(body,storeID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dateCreated" : "2020-03-31T00:00:00.000+0000",
  "name" : "Cere Cort 1",
  "id" : "P001",
  "category" : "hardware",
  "version" : "0.0.1",
  "wip" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new store
 * Adds a new store to collection
 *
 * body Store Store object to be sent (optional)
 * returns Store
 **/
exports.addStore = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ownership" : "third",
  "name" : "amazon",
  "location" : "online",
  "id" : "S001",
  "products" : [ {
    "dateCreated" : "2020-03-31T00:00:00.000+0000",
    "name" : "Cere Cort 1",
    "id" : "P001",
    "category" : "hardware",
    "version" : "0.0.1",
    "wip" : true
  }, {
    "dateCreated" : "2020-03-31T00:00:00.000+0000",
    "name" : "Cere Cort 1",
    "id" : "P001",
    "category" : "hardware",
    "version" : "0.0.1",
    "wip" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete store
 * Removes store from collection
 *
 * storeID String 
 * no response value expected for this operation
 **/
exports.deleteStore = function(storeID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all stores
 * Returns array of all stores
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getAllStores = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ownership" : "third",
  "name" : "amazon",
  "location" : "online",
  "id" : "S001",
  "products" : [ {
    "dateCreated" : "2020-03-31T00:00:00.000+0000",
    "name" : "Cere Cort 1",
    "id" : "P001",
    "category" : "hardware",
    "version" : "0.0.1",
    "wip" : true
  }, {
    "dateCreated" : "2020-03-31T00:00:00.000+0000",
    "name" : "Cere Cort 1",
    "id" : "P001",
    "category" : "hardware",
    "version" : "0.0.1",
    "wip" : true
  } ]
}, {
  "ownership" : "third",
  "name" : "amazon",
  "location" : "online",
  "id" : "S001",
  "products" : [ {
    "dateCreated" : "2020-03-31T00:00:00.000+0000",
    "name" : "Cere Cort 1",
    "id" : "P001",
    "category" : "hardware",
    "version" : "0.0.1",
    "wip" : true
  }, {
    "dateCreated" : "2020-03-31T00:00:00.000+0000",
    "name" : "Cere Cort 1",
    "id" : "P001",
    "category" : "hardware",
    "version" : "0.0.1",
    "wip" : true
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove product from store
 * Removes product from store collection
 *
 * storeID String ID of the store
 * prodID String ID of the product
 * no response value expected for this operation
 **/
exports.removeProductFromStore = function(storeID,prodID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get details of all products in store
 *
 * storeID String 
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.storeStoreIDProductsGET = function(storeID,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "dateCreated" : "2020-03-31T00:00:00.000+0000",
  "name" : "Cere Cort 1",
  "id" : "P001",
  "category" : "hardware",
  "version" : "0.0.1",
  "wip" : true
}, {
  "dateCreated" : "2020-03-31T00:00:00.000+0000",
  "name" : "Cere Cort 1",
  "id" : "P001",
  "category" : "hardware",
  "version" : "0.0.1",
  "wip" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update store details
 * Updates store details in collection
 *
 * body Store  (optional)
 * storeID String 
 * returns Store
 **/
exports.updateStore = function(body,storeID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ownership" : "third",
  "name" : "amazon",
  "location" : "online",
  "id" : "S001",
  "products" : [ {
    "dateCreated" : "2020-03-31T00:00:00.000+0000",
    "name" : "Cere Cort 1",
    "id" : "P001",
    "category" : "hardware",
    "version" : "0.0.1",
    "wip" : true
  }, {
    "dateCreated" : "2020-03-31T00:00:00.000+0000",
    "name" : "Cere Cort 1",
    "id" : "P001",
    "category" : "hardware",
    "version" : "0.0.1",
    "wip" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

