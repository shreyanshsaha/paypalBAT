'use strict';

var utils = require('../utils/writer.js');
var Member = require('../service/MemberService');

module.exports.getAllMembers = function getAllMembers (req, res, next, limit, offset) {
  Member.getAllMembers(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMember = function getMember (req, res, next, empID) {
  Member.getMember(empID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
