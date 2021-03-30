import React from 'react';
import routes from '../routes';
import { NavLink } from 'react-router-dom';
const Appbar = () => {
  return (
    <header>
      <nav>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>

        <NavLink
          exact
          to={routes.movies}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>

        {/* <li>
          <NavLink
            exact
            to="/movies/:movieId"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movie Information
          </NavLink>
        </li> */}
      </nav>
    </header>
  );
};

export default Appbar;
