//  'https://developers.themoviedb.org/3/trending/get-trending';

import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ad3f7cfb29663268a312ffcd6543db3b';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  //   // image_type: 'photo',
  //   // orientation: 'horizontal',
};

const fetchMovies = () => {
  return axios.get('trending/movie/week').then(res => res.data.results);
};

const fetchMovieById = movie_id => {
  return axios.get(`movie/${movie_id}`).then(res => res.data);
};
const fetchMovieCast = movie_id => {
  return axios.get(`movie/${movie_id}/credits`).then(res => res.data);
};
const fetchMovieReviews = movie_id => {
  return axios.get(`movie/${movie_id}/reviews`).then(res => res.data);
};
const fetchSearchedMovies = searchQuery => {
  return axios.get(`search/movie?query=${searchQuery}`).then(res => res.data);
};
// fetchImages.propTypes = {
//   queryResult: PropTypes.string,
//   page: PropTypes.number,
// };

export {
  fetchMovies,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
  fetchSearchedMovies,
};
