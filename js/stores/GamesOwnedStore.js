'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/GamesOwnedConstants');
var assign = require('object-assign');

var _games = [];

function saveData (data) {
    _games = data;
}

function sortData (key) {
    _games = _games.sort(function (a, b) {
        var x,y;
        if (key === 'playtime_forever') {
            x = b;
            y = a;
        } else {
            x = a;
            y = b;
        }
        if (x[key] < y[key]) {
            return -1;
        } else if (x[key] > y[key]) {
            return 1;
        }
        return 0;
    });
}

var GamesOwnedStore = assign({}, EventEmitter.prototype, {

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
    switch (action.actionType) {
        case Constants.GET_GAME_DATA:
            saveData(action.response);
            break;
        case Constants.SORT_GAME_DATA:
            sortData(action.response);
            break;
        default:
            // no op
    }
    GamesOwnedStore.emitChange();
    return true;
});

module.exports = GamesOwnedStore;
