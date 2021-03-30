import React, { Component } from 'react';
import { fetchMovieById } from '../services/FetchAPI';
import { NavLink, Route, Switch } from 'react-router-dom';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = { id: null, title: '' };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await fetchMovieById(movieId);
    this.setState({ ...response });
  }
  handleGoBack = () => {
    const { location, history } = this.props;
    // if (location.state && Location.state.from) {
    //   return this.props.history.push(this.props.location.state.from);
    // }
    // history.push(routes.movies);
    history.push(location?.state?.from || routes.movies);
  };
  render() {
    const { match } = this.props;
    const posterSrc = `https://image.tmdb.org/t/p/w300${this.state.poster_path}`;
    // console.log(`${this.props.match.url}/cast`);
    // console.log(`${this.props.match.path}/cast`);
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Back
        </button>
        <h1>{this.props.match.params.movieId}</h1>
        <p>{this.state.title}</p>
        <img src={posterSrc} alt="" />
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            path={`${this.props.match.path}/cast`}
            render={props => <MovieCast {...props} cast={this.state.id} />}
            // component={MovieCast}
          />
          <Route
            path={`${this.props.match.path}/reviews`}
            render={props => (
              <MovieReviews {...props} reviews={this.state.id} />
            )}
            // component={MovieReviews}
          />
        </Switch>
      </div>
    );
    // https://image.tmdb.org/t/p/w500;
  }
}

export default MovieDetailsPage;
