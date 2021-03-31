import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import s from './MoviesList.module.scss';
// import MoviePreview from './MoviePreview';
const MoviesList = ({ movies, location }) => {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title }) => (
        <li className={s.listItem} key={id}>
          <NavLink
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            {/* ${this.props.match.url} */}
            {/* <MoviePreview title={title} id={id} /> */}
            {/* {movie.title} */}
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
