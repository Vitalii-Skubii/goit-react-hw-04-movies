import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from './MoviePreview';
const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            {/* ${this.props.match.url} */}
            <MoviePreview title={title} id={id} />
            {/* {movie.title} */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
