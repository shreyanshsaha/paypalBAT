'use strict';

var utils = require('../utils/writer.js');
var Store = require('../service/StoreService');

module.exports.addProductToStore = function addProductToStore (req, res, next, body, storeID) {
  Store.addProductToStore(body, storeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addStore = function addStore (req, res, next, body) {
  Store.addStore(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStore = function deleteStore (req, res, next, storeID) {
  Store.deleteStore(storeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllStores = function getAllStores (req, res, next, limit, offset) {
  Store.getAllStores(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeProductFromStore = function removeProductFromStore (req, res, next, storeID, prodID) {
  Store.removeProductFromStore(storeID, prodID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeStoreIDProductsGET = function storeStoreIDProductsGET (req, res, next, storeID, limit, offset) {
  Store.storeStoreIDProductsGET(storeID, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateStore = function updateStore (req, res, next, body, storeID) {
  Store.updateStore(body, storeID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
