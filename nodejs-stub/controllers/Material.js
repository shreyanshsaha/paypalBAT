'use strict';

var utils = require('../utils/writer.js');
var Material = require('../service/MaterialService');

module.exports.addMaterial = function addMaterial (req, res, next, suppID) {
  Material.addMaterial(suppID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleleMaterial = function deleleMaterial (req, res, next, suppID, matID) {
  Material.deleleMaterial(suppID, matID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllMaterials = function getAllMaterials (req, res, next, limit, offset) {
  Material.getAllMaterials(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMaterialBySupplier = function getMaterialBySupplier (req, res, next, suppID, limit, offset) {
  Material.getMaterialBySupplier(suppID, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMaterial = function updateMaterial (req, res, next, body, suppID, matID) {
  Material.updateMaterial(body, suppID, matID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
