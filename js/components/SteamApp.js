/** @jsx React.DOM */
var React = require('react');

var GameList = require('./GameList');

var GamesOwnedStore = require('../stores/GamesOwnedStore');
var GamesOwnedActions = require('../actions/GamesOwnedActions');

var RecentlyPlayedStore = require('../stores/RecentlyPlayedStore');
var RecentlyPlayedActions = require('../actions/RecentlyPlayedActions');

var SteamApp = React.createClass({
    displayName: 'SteamApp',
    componentDidMount: function () {
        GamesOwnedActions.getData();
        RecentlyPlayedActions.getData();
    },
    render: function () {
        return (
            <div>
                <h1>Steam App</h1>
                <GameList
                    title="Recently Played"
                    store={ RecentlyPlayedStore }
                    actions={ RecentlyPlayedActions }
                 />
                <GameList
                    title="Games Owned"
                    store={ GamesOwnedStore }
                    actions={ GamesOwnedActions }
                 />
            </div>
        );
    },
});

module.exports = SteamApp;
