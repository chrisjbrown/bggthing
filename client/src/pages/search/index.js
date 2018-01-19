import React, { Component } from 'react';
import { search } from '../../api';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    };
  }

  onSearchChange = (event) => {
    if (event.currentTarget.value !== this.state.query) {
      this.setState({
        query: event.currentTarget.value
      });
    }
  }

  handleSearch = () => {
    if (this.state.query) {
      search(this.state.query).then((data) => {
        this.setState({
          results: data.items.item
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          placeholder="search"
          value={ this.state.query }
          onChange={ this.onSearchChange }
        />
        <button onClick={ this.handleSearch }>
          search
        </button>
        {
          this.state.results.map((result) => {
            return (
              <div key={ result.id }>
                <h2>{result.name.value}</h2>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Search;
