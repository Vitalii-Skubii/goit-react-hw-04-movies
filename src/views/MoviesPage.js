import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import { fetchSearchedMovies } from '../services/FetchAPI';
import MoviesList from '../components/MoviesList';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
class MoviesPage extends Component {
  state = { searchQuery: '', movies: [] };

  handleSearchMovies = search => {
    this.setState({ searchQuery: search, movies: [] });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${search}`,
    });
  };

  async componentDidMount() {
    // const queryParams = queryString.parse(this.props.location.search);
    // console.log(queryParams);
    const queryParams = queryString.parse(this.props.location.search).query;
    if (queryParams !== '' && queryParams !== undefined) {
      const response = await fetchSearchedMovies(queryParams);
      this.setState({ movies: response.results });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const { searchQuery } = this.state;
      const response = await fetchSearchedMovies(searchQuery);
      this.setState({ movies: response.results });
    }
  }

  render() {
    const { movies, searchQuery } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchMovies} />

        {movies && movies.length > 0 && <MoviesList movies={movies} />}
      </div>
    );
  }
}

export default MoviesPage;
