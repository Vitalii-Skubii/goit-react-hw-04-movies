import React, { Component } from 'react';
import { fetchMovieReviews } from '../../services/FetchAPI';
import s from './MovieReviews.module.scss';
class MovieReviews extends Component {
  state = { results: [] };
  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const response = await fetchMovieReviews(id);
    this.setState({ ...response });
  }
  render() {
    return (
      <div>
        {this.state.results.length > 0 ? (
          <ul>
            {this.state.results.map(result => (
              <li className={s.item} key={result.id}>
                <h1 className={s.author}>Author:{result.author}</h1>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no reviews for this movie</p>
        )}
      </div>
    );
  }
}

export default MovieReviews;
