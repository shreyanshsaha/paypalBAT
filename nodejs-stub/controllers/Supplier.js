'use strict';

var utils = require('../utils/writer.js');
var Supplier = require('../service/SupplierService');

module.exports.addSupplier = function addSupplier (req, res, next, body) {
  Supplier.addSupplier(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSuppliers = function getAllSuppliers (req, res, next, limit, offset) {
  Supplier.getAllSuppliers(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
