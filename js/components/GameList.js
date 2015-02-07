/** @jsx React.DOM */
var React = require('react');

var GameList = React.createClass({
    displayName: 'GameList',
    render: function () {
        return (
            <div>
                <h2>GameList</h2>
                <ul>
                    { this.props.games.map(function (game) {
                        return <li key={ game.appid }>{ game.name }</li>
                    }) }
                </ul>
            </div>
        );
    }
});

module.exports = GameList;
