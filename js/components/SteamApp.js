/** @jsx React.DOM */
var React = require('react');
var GamesOwnedList = require('./GamesOwnedList');

var SteamApp = React.createClass({
    displayName: 'SteamApp',
    render: function () {
        return (
            <div>
                <h1>Steam App</h1>
                <GamesOwnedList />
            </div>
        );
    },
});

module.exports = SteamApp;
