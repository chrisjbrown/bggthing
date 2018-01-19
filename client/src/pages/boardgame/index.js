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
      console.log('gotit', data);
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
        <div>name { this.state.game.name[0].value }</div>
        <div>
          <img alt="" src={ this.state.game.image }/>
        </div>
      </div>
    );
  }
}

export default Boardgame;
