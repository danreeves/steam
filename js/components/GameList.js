/** @jsx React.DOM */
var React = require('react');

var GameList = React.createClass({
    displayName: 'GameList',
    getInitialState: function () {
        return {
            games: this.props.store.getState(),
        }
    },
    componentDidMount: function () {
        this.props.store.addChangeListener(this.onStoreChange);
    },
    updateState: function (key, data) {
        var state = this.state;
        state[key] = data;
        this.setState(state);
    },
    onStoreChange: function () {
        this.updateState('games', this.props.store.getState());
    },
    render: function () {
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <p>Sort:
                    <button onClick={ this.props.actions.sortData('appid') }>ID</button>
                    <button onClick={ this.props.actions.sortData('name') }>Name</button>
                    <button onClick={ this.props.actions.sortData('playtime_forever') }>Play time</button>
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

module.exports = GameList;
