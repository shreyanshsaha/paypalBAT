'use strict';


/**
 * Create a new product
 * Adds new product to collection passed via body
 *
 * body Product  (optional)
 * returns Product
 **/
exports.createProduct = function(body) {
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
 * Update product by ID
 * Delete product by ID
 *
 * prodID String ID of product to delete
 * no response value expected for this operation
 **/
exports.deleteProduct = function(prodID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all products
 * Returns json array of all products
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getAllProducts = function(limit,offset) {
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
 * Find product by ID
 * Returns a single product object
 *
 * prodID String ID of product to return
 * returns Product
 **/
exports.getProductById = function(prodID) {
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
 * Get materials for a product
 * Returns array of materials
 *
 * prodID String ID of the product
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getProductMaterials = function(prodID,limit,offset) {
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
 * Get suppliers for a product
 * Returns array of suppliers
 *
 * prodID String ID of the product
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * returns List
 **/
exports.getProductSuppliers = function(prodID,limit,offset) {
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


/**
 * Update product by ID
 * Updates information about a product
 *
 * body Product Product Object to be updated
 * prodID String ID of product to update
 * returns Product
 **/
exports.updateProduct = function(body,prodID) {
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

