'use strict';

var pls = require('please-ajax')(window);
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../Constants/GamesOwnedConstants');

var GamesOwnedActions = {
    getData: function () {
        pls.get('http://steam.danreev.es/api/games/owned', {
            success: function (d) {
                var payload = {
                    actionType: Constants.GET_DATA,
                    response: d.data.response.games
                };
                AppDispatcher.dispatch(payload);
            }
        });
    },
    sortData: function (key) {
        return function () {
            var payload = {
                actionType: Constants.SORT_DATA,
                response: key
            };
            AppDispatcher.dispatch(payload);
        };
    }
};

module.exports = GamesOwnedActions;
