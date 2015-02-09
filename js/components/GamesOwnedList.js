/** @jsx React.DOM */
var React = require('react');
var GamesOwnedStore = require('../stores/GamesOwnedStore');
var GamesOwnedActions = require('../actions/GamesOwnedActions');

var GamesOwnedList = React.createClass({
    displayName: 'GamesOwnedList',
    getInitialState: function () {
        return {
            games: GamesOwnedStore.getState(),
        }
    },
    componentDidMount: function() {
        GamesOwnedStore.addChangeListener(this.onGamesOwnedListChange);
        this.getDataIfNeeded();
    },
    updateState: function (key, data) {
        var state = this.state;
        state[key] = data;
        this.setState(state);
    },
    onGamesOwnedListChange: function () {
        this.updateState('games', GamesOwnedStore.getState());
    },
    getDataIfNeeded: function(props) {
        GamesOwnedActions.getData();
    },
    render: function () {
        return (
            <div>
                <h2>GamesOwnedList</h2>
                <p>Sort:
                    <button onClick={ GamesOwnedActions.sortData('appid') }>ID</button>
                    <button onClick={ GamesOwnedActions.sortData('name') }>Name</button>
                    <button onClick={ GamesOwnedActions.sortData('playtime_forever') }>Play time</button>
                </p>
                <ul>
                    { this.state.games.map(function (game) {
                        return <li key={ game.appid }>{ game.name }</li>
                    }) }
                </ul>
            </div>
        );
    }
});

module.exports = GamesOwnedList;
