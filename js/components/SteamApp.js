/** @jsx React.DOM */
var React = require('react');
var GameList = require('./GameList');
var GameStore = require('../stores/GameStore');

var SteamApp = React.createClass({
    displayName: 'SteamApp',
    getInitialState: function () {
        return {
            games: GameStore.getState(),
        }
    },
    render: function () {
        return (
            <div>
                <h1>Steam App</h1>
                <GameList
                    games={ this.state.games }
                 />
            </div>
        );
    }
});

module.exports = SteamApp;
