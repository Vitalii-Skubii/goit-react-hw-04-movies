import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../services/FetchAPI';
import MoviesList from '../components/MoviesList';
class HomePage extends Component {
  state = { movies: [] };
  async componentDidMount() {
    const response = await fetchMovies();
    this.setState({ movies: response });
  }
  render() {
    return (
      <div>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomePage;
