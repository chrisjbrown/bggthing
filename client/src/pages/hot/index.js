import React, { Component } from 'react';
import { getHotList } from '../../api';
import { Link } from 'react-router-dom';

class Hot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    };
  }

  componentDidMount() {
    getHotList('boardgame').then((data) => {
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
              <Link key={ game.id } to={`/boardgame/${game.id}`}>
                <div>
                  <div>
                    { game.name.value } id: { game.id }
                  </div>
                  <div>
                    <img alt={ game.name.value } src={ game.thumbnail.value } />
                  </div>
                </div>
              </Link>
            );
          })
        }
      </div>
    );
  }
}

export default Hot;
