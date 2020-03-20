'use strict';

var utils = require('../utils/writer.js');
var Team = require('../service/TeamService');

module.exports.getAllTeams = function getAllTeams (req, res, next, limit, offset) {
  Team.getAllTeams(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeam = function getTeam (req, res, next, teamID) {
  Team.getTeam(teamID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeamMembers = function getTeamMembers (req, res, next, teamID, limit, offset) {
  Team.getTeamMembers(teamID, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
