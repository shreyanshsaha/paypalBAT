'use strict';


/**
 * Search factory
 * Returns array of factories given by query
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * location String  (optional)
 * returns List
 **/
exports.factoriesSearchGET = function(limit,offset,location) {
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
 * Search for member
 * Returns array of members by query
 *
 * q q_3 query params to search (optional)
 * returns List
 **/
exports.search member by ID = function(q) {
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
 * Search for item in inventory
 * Searches inventory based on query
 *
 * columnName String Column name to search value in (optional)
 * value String Value to search for (optional)
 * returns Inventory
 **/
exports.searchInventory = function(columnName,value) {
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
 * Get all products
 * Search for products by query
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * q q query params to search (optional)
 * returns List
 **/
exports.searchProducts = function(limit,offset,q) {
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
 * Search for store
 * Returns array of stores based on query
 *
 * q q_4 query params to search (optional)
 * returns List
 **/
exports.searchStore = function(q) {
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
 * Search for supplier
 * Searches for supplier based on query
 *
 * q q_1 query params to search (optional)
 * returns List
 **/
exports.searchSupplier = function(q) {
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
 * Search for material
 * Searches for a material based on query
 *
 * q q_2 query params to search (optional)
 * returns List
 **/
exports.suppliersMaterialsSearchGET = function(q) {
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
 * Search warehouse
 * Returns array of warehouse given by query
 *
 * limit Integer The number of items to retrieve (optional)
 * offset Integer Number of items to set offset to (optional)
 * q q_5  (optional)
 * returns List
 **/
exports.warehouseSearchGET = function(limit,offset,q) {
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

