'use strict';

var utils = require('../utils/writer.js');
var Factory = require('../service/FactoryService');

module.exports.addFactory = function addFactory (req, res, next, body, factoryID) {
  Factory.addFactory(body, factoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addProductToFactory = function addProductToFactory (req, res, next, body, factoryID) {
  Factory.addProductToFactory(body, factoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllFactory = function getAllFactory (req, res, next) {
  Factory.getAllFactory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFactory = function getFactory (req, res, next, factoryID) {
  Factory.getFactory(factoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFactoryProducts = function getFactoryProducts (req, res, next, factoryID) {
  Factory.getFactoryProducts(factoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeFactory = function removeFactory (req, res, next, factoryID) {
  Factory.removeFactory(factoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeProductFromFactory = function removeProductFromFactory (req, res, next, factoryID, productID) {
  Factory.removeProductFromFactory(factoryID, productID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFactory = function updateFactory (req, res, next, body, factoryID) {
  Factory.updateFactory(body, factoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
