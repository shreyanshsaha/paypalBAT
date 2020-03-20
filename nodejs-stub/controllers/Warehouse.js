'use strict';

var utils = require('../utils/writer.js');
var Warehouse = require('../service/WarehouseService');

module.exports.addWarehouse = function addWarehouse (req, res, next, body, warehouseID) {
  Warehouse.addWarehouse(body, warehouseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllWarehouses = function getAllWarehouses (req, res, next) {
  Warehouse.getAllWarehouses()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWarehouse = function getWarehouse (req, res, next, warehouseID) {
  Warehouse.getWarehouse(warehouseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWarehouseItems = function getWarehouseItems (req, res, next, warehouseID) {
  Warehouse.getWarehouseItems(warehouseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateWarehouse = function updateWarehouse (req, res, next, body, warehouseID) {
  Warehouse.updateWarehouse(body, warehouseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.warehousesWarehouseIDItemsPUT = function warehousesWarehouseIDItemsPUT (req, res, next, body, warehouseID) {
  Warehouse.warehousesWarehouseIDItemsPUT(body, warehouseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
