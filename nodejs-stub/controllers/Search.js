'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.factoriesSearchGET = function factoriesSearchGET (req, res, next, limit, offset, location) {
  Search.factoriesSearchGET(limit, offset, location)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.search member by ID = function search member by ID (req, res, next, q) {
  Search.search member by ID(q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchInventory = function searchInventory (req, res, next, columnName, value) {
  Search.searchInventory(columnName, value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchProducts = function searchProducts (req, res, next, limit, offset, q) {
  Search.searchProducts(limit, offset, q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchStore = function searchStore (req, res, next, q) {
  Search.searchStore(q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchSupplier = function searchSupplier (req, res, next, q) {
  Search.searchSupplier(q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.suppliersMaterialsSearchGET = function suppliersMaterialsSearchGET (req, res, next, q) {
  Search.suppliersMaterialsSearchGET(q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.warehouseSearchGET = function warehouseSearchGET (req, res, next, limit, offset, q) {
  Search.warehouseSearchGET(limit, offset, q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
