'use strict';


/**
 * Add a new factory
 * Adds a new factory to collection
 *
 * body Factory  (optional)
 * factoryID String 
 * returns Factory
 **/
exports.addFactory = function(body,factoryID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "location" : "mumbai",
  "id" : "F001",
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
 * Add new product
 * Add new product to factory collection
 *
 * body Body_2  (optional)
 * factoryID String 
 * no response value expected for this operation
 **/
exports.addProductToFactory = function(body,factoryID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all factories
 * Returns array of all factories
 *
 * returns List
 **/
exports.getAllFactory = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "location" : "mumbai",
  "id" : "F001",
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
  "location" : "mumbai",
  "id" : "F001",
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
 * Get factory by id
 * Returns factory object
 *
 * factoryID String 
 * returns Factory
 **/
exports.getFactory = function(factoryID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "location" : "mumbai",
  "id" : "F001",
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
 * Get all products
 * Returns array of products manufactured in factory
 *
 * factoryID String 
 * returns List
 **/
exports.getFactoryProducts = function(factoryID) {
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
 * Remove factory details
 * Removes factory from collection
 *
 * factoryID String 
 * returns Factory
 **/
exports.removeFactory = function(factoryID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "location" : "mumbai",
  "id" : "F001",
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
 * Remove product
 * Remove product from product collection
 *
 * factoryID String 
 * productID String 
 * no response value expected for this operation
 **/
exports.removeProductFromFactory = function(factoryID,productID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit factory details
 * Updates factory in collection
 *
 * body Factory  (optional)
 * factoryID String 
 * returns Factory
 **/
exports.updateFactory = function(body,factoryID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "location" : "mumbai",
  "id" : "F001",
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

