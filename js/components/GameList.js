/** @jsx React.DOM */
var React = require('react');
var GAMES_LIST = require('../constants/GameList');

var GameList = React.createClass({
    displayName: 'GameList',
    render: function () {
        return (
            <div>
                <h2>GameList</h2>
                <ul>
                    { GAMES_LIST.map(function (game) {
                        return <li key={ game.appid }>{ game.name }</li>
                    }) }
                </ul>
            </div>
        );
    }
});

module.exports = GameList;
