/** @jsx React.DOM */
var React = require('react');
var GameStore = require('../stores/GameStore');
var GameActions = require('../actions/GameActions');

var GameList = React.createClass({
    displayName: 'GameList',
    getInitialState: function () {
        return {
            games: GameStore.getState(),
        }
    },
    componentDidMount: function() {
        GameStore.addChangeListener(this.onGameListChange);
        this.getDataIfNeeded();
    },
    updateState: function (key, data) {
        var state = this.state;
        state[key] = data;
        this.setState(state);
    },
    onGameListChange: function () {
        this.updateState('games', GameStore.getState());
    },
    getDataIfNeeded: function(props) {
        GameActions.getData();
    },
    render: function () {
        return (
            <div>
                <h2>GameList</h2>
                <ul>
                    { this.state.games.map(function (game) {
                        return <li key={ game.appid }>{ game.name }</li>
                    }) }
                </ul>
            </div>
        );
    }
});

module.exports = GameList;
