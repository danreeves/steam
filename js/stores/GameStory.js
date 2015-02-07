'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var GAMES = require('../contstants/GameList');

var _games = [];

var GameStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        if (!_games.length) {
            return GAMES;
        }
        return _games;
    },

});


// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    default:
      // no op
  }
});


module.exports = GameStore;
