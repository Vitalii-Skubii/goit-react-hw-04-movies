import React, { Component } from 'react';
import { fetchMovieById } from '../../services/FetchAPI';
import { NavLink, Route, Switch } from 'react-router-dom';
import MovieCast from '../../components/MovieCast';
import MovieReviews from '../../components/MovieReviews';
import routes from '../../routes';
import s from './MovieDetailsPage.module.scss';

class MovieDetailsPage extends Component {
  state = { id: null, title: '', genres: [] };
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
        <div className={s.detailsPageWrapper}>
          <div className={s.posterWrapper}>
            <button
              className={s.button}
              type="button"
              onClick={this.handleGoBack}
            >
              Back
            </button>
            <img src={posterSrc} alt="" />
          </div>
          <div className={s.descrWrapper}>
            <h1 className={s.title}>
              {/* {this.props.match.params.movieId} */}
              {this.state.title}
            </h1>
            <p className={s.overview}>
              <span className={s.overviewSpan}>Overview:</span>
              {this.state.overview}
            </p>
            <p className={s.score}>
              <span className={s.scoreSpan}>movie score:</span>
              {this.state.vote_average}
            </p>
            <p className={s.genres}>
              <span className={s.genresSpan}>Genres:</span>
              {this.state.genres.map(genre => `${genre.name} `)}
            </p>
          </div>
        </div>

        <ul className={s.editionalInfo}>
          <li className={s.editionalInfoItem}>
            <NavLink
              className={s.NavLink}
              activeClassName={s.NavLinkActive}
              to={`${this.props.match.url}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.editionalInfoItem}>
            <NavLink
              className={s.NavLink}
              activeClassName={s.NavLinkActive}
              to={`${this.props.match.url}/reviews`}
            >
              Reviews
            </NavLink>
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
