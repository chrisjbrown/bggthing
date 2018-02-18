import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';
import { Loader, Dimmer } from 'semantic-ui-react';

import { Breadcrumb } from 'semantic-ui-react';

class Boardgame extends Component {
  renderLoader() {
    return (
      <Dimmer active>
        <Loader indeterminate>loading game stuff</Loader>
      </Dimmer>
    );
  }

  render() {
    if (this.props.isFetching) {
      return this.renderLoader();
    }

    const gameName = Array.isArray(this.props.game.name)
      ? this.props.game.name[0].value
      : this.props.game.name.value;

    return (
      <div>
        <div>
          <Breadcrumb>
            <Breadcrumb.Section>
              <Link href="/">Hot</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section>{gameName}</Breadcrumb.Section>
          </Breadcrumb>
        </div>
        <div>id {this.props.router.params.id}</div>
        <div>name {gameName}</div>
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
