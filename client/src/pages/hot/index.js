import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';

import { Grid, Image, Header, Icon, Loader, Dimmer } from 'semantic-ui-react';

class Hot extends Component {
  renderLoader() {
    return (
      <Dimmer active>
        <Loader indeterminate>Getting Hot Stuff ;)</Loader>
      </Dimmer>
    );
  }

  renderGrid() {
    return (
      <Grid doubling centered inverted stackable columns={4} divided>
        <Grid.Row textAlign="center" centered>
          {this.props.list.map(game => {
            return (
              <Grid.Column textAlign="center" key={game.id}>
                <Link href={`/boardgame/${game.id}`}>
                  <div>
                    {game.name.value} id: {game.id}
                  </div>
                  <Image centered src={game.thumbnail.value} />
                </Link>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        <Header as="h2" inverted icon textAlign="center">
          <Icon name="fire" color="yellow" inverted circular />
          <Header.Content>Hot List</Header.Content>
        </Header>
        <div style={{ marginTop: '20px' }}>
          {this.props.isFetching ? this.renderLoader() : this.renderGrid()}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  list: state.hotStore.list,
  isFetching: state.hotStore.isFetching,
  error: state.hotStore.error
}))(Hot);
