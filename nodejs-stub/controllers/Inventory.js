'use strict';

var utils = require('../utils/writer.js');
var Inventory = require('../service/InventoryService');

module.exports.addInventory = function addInventory (req, res, next, body) {
  Inventory.addInventory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllInventory = function getAllInventory (req, res, next, limit, offset) {
  Inventory.getAllInventory(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInventory = function getInventory (req, res, next, invID) {
  Inventory.getInventory(invID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.inventoryInvIDDELETE = function inventoryInvIDDELETE (req, res, next, invID) {
  Inventory.inventoryInvIDDELETE(invID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInventory = function updateInventory (req, res, next, body, invID) {
  Inventory.updateInventory(body, invID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
