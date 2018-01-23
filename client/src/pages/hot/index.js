import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';

class Hot extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(game => {
          return (
            <Link key={game.id} href={`/boardgame/${game.id}`}>
              <div>
                <div>
                  {game.name.value} id: {game.id}
                </div>
                <div>
                  <img alt={game.name.value} src={game.thumbnail.value} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default connect(state => ({
  list: state.hotStore.list,
  isFetching: state.hotStore.isFetching,
  error: state.hotStore.error
}))(Hot);
