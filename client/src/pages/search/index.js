import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-little-router';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  onSearchChange = event => {
    if (event.currentTarget.value !== this.state.query) {
      this.setState({
        query: event.currentTarget.value
      });
    }
  };

  handleSearch = () => {
    if (this.state.query) {
      this.props.push(`/search/${this.state.query}`);
    }
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          placeholder="search"
          value={this.state.query}
          onChange={this.onSearchChange}
        />
        <button onClick={this.handleSearch}>search</button>
        {this.props.list.map(result => {
          return (
            <div key={result.id}>
              <h2>{result.name.value}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  state => ({
    list: state.searchStore.list,
    isFetching: state.searchStore.isFetching,
    error: state.searchStore.error
  }),
  dispatch =>
    bindActionCreators(
      {
        push
      },
      dispatch
    )
)(Search);
