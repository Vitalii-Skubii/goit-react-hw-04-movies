import React, { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import NotFound from './views/NotFound';
import routes from './routes';
import Appbar from './components/Appbar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const NotFound = lazy(() =>
  import('./views/NotFound' /* webpackChunkName: "NotFound" */),
);
const App = () => {
  return (
    <div>
      <Appbar />
      <Suspense fallback={<h1>Downloading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />

          {/* <Route path="/movies/:movieId/cast" component={MovieDetailsPage} />
        <Route path="/movies/:movieId/reviews" component={MovieDetailsPage} /> */}
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
