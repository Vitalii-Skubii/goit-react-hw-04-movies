import React, { Component } from 'react';
import { fetchMovieCast } from '../services/FetchAPI';
class MovieCast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const response = await fetchMovieCast(id);
    this.setState({ ...response });
  }
  render() {
    const profilePhoto = 'https://www.themoviedb.org/t/p/w138_and_h175_face';
    return (
      <div>
        <ul>
          {this.state.cast.map(
            (actor, index) =>
              index < 8 && (
                <li key={actor.id}>
                  <img src={`${profilePhoto}${actor.profile_path}`} alt="" />
                  <p>{actor.name}</p>
                  <p>Character:{actor.character}</p>
                </li>
              ),
          )}
        </ul>
      </div>
    );
  }
}

export default MovieCast;
