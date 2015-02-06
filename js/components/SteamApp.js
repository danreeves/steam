/** @jsx React.DOM */
var React = require('react');
var GameList = require('./GameList');

var SteamApp = React.createClass({
    displayName: 'SteamApp',
    render: function () {
        return (
            <div>
                <h1>Steam App</h1>
                <GameList />
            </div>
        );
    }
});

module.exports = SteamApp;
