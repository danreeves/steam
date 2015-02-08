'use strict';

var pls = require('please-ajax')(window);
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../Constants/GameConstants');

var GameActions = {
    getData: function() {
        pls.get('http://steam.danreev.es/api/games/recent', {
            success: function (d) {
                var payload = {
                    actionType: Constants.GET_GAME_DATA,
                    response: d.data.response.games
                };
                AppDispatcher.dispatch(payload);
            }
        });
    },
};

module.exports = GameActions;
