import React, { Component } from 'react';
import { getHotList } from '../../api';

class Hot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    };
  }

  componentDidMount() {
    getHotList('boardgame').then((data) => {
      console.log('gotit', data);
      if (data.items) {
        this.setState({
          games: data.items.item
        });
      }
    });
  }

  render() {
    return (
      <div>
        {
          this.state.games.map((game) => {
            return (
              <div key={ game.id }>
                <div>
                  { game.name.value } id: { game.id }
                </div>
                <div>
                  <img alt="" src={ game.thumbnail.value } />
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Hot;
