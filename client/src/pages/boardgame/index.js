import React, { Component } from 'react';
import { connect } from 'react-redux';

class Boardgame extends Component {
  render() {
    return (
      <div>
        <div>id {this.props.router.params.id}</div>
        <div>
          name{' '}
          {this.props.game.name[0]
            ? this.props.game.name[0].value
            : this.props.game.name.value}
        </div>
        <div>
          <img width="500" height="500" alt="" src={this.props.game.image} />
        </div>
        <div>{this.props.game.description}</div>
      </div>
    );
  }
}

export default connect(state => ({
  router: state.router,
  game: state.boardgameStore.game,
  isFetching: state.boardgameStore.isFetching,
  error: state.boardgameStore.error
}))(Boardgame);
