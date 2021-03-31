import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import s from './Appbar.module.scss';
const Appbar = () => {
  return (
    <header className={s.appbar}>
      <nav>
        <NavLink
          exact
          to={routes.home}
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Home
        </NavLink>

        <NavLink
          exact
          to={routes.movies}
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
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
