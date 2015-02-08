'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/GameConstants');
var assign = require('object-assign');

var _games = [];

function saveData (data) {
    _games = data;
}

var GameStore = assign({}, EventEmitter.prototype, {

    getState: function () {
        return _games;
    },


    addChangeListener: function(callback) {
        this.on(Constants.CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(Constants.CHANGE_EVENT);
    },

});

AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case Constants.GET_GAME_DATA:
            saveData(action.response);
            break;
        default:
            // no op
    }
    GameStore.emitChange();
    return true;
});

module.exports = GameStore;
