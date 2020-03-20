'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.createProduct = function createProduct (req, res, next, body) {
  Product.createProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProduct = function deleteProduct (req, res, next, prodID) {
  Product.deleteProduct(prodID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProducts = function getAllProducts (req, res, next, limit, offset) {
  Product.getAllProducts(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductById = function getProductById (req, res, next, prodID) {
  Product.getProductById(prodID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductMaterials = function getProductMaterials (req, res, next, prodID, limit, offset) {
  Product.getProductMaterials(prodID, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductSuppliers = function getProductSuppliers (req, res, next, prodID, limit, offset) {
  Product.getProductSuppliers(prodID, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProduct = function updateProduct (req, res, next, body, prodID) {
  Product.updateProduct(body, prodID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
