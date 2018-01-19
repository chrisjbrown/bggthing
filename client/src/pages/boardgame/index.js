import React, { Component } from 'react';
import { getBoardgame } from '../../api';

class Boardgame extends Component {

  constructor(props) {
    super(props);

    this.state = {
      game: {
        name: [{
          value: ''
        }]
      }
    };
  }

  componentDidMount() {
    getBoardgame(this.props.match.params.id).then((data) => {
      if (data.items) {
        this.setState({
          game: data.items.item
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div>id { this.props.match.params.id }</div>
        <div>name { this.state.game.name[0] ? this.state.game.name[0].value : this.state.game.name.value }</div>
        <div>
          <img width="500" height="500" alt="" src={ this.state.game.image }/>
        </div>
        <div>
          { this.state.game.description }
        </div>
      </div>
    );
  }
}

export default Boardgame;
