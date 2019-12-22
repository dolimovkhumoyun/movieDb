const loadMovies = page => ({
  type: "LOAD",
  value: page
});

const setMovies = movies => ({
  type: "LOAD_SUCCESS",
  movies
});

const getMovie = movie_id => ({
  type: "GET_MOVIE",
  payload: movie_id
});

const setMovie = movie => ({
  type: "SET_MOVIE",
  payload: movie
});

const loadGenres = () => ({
  type: "LOAD_GENRES"
});

const setGenres = genres => ({
  type: "SET_GENRES",
  genres
});

const emitLogin = (username, password) => ({
  type: "EMIT_LOGIN",
  payload: { username, password }
});

const onLogin = () => ({
  type: "ON_LOGIN"
});

const getRelatedMovies = genres => ({
  type: "GET_RELATED",
  payload: genres
});

const setRelatedMovies = movies => ({
  type: "SET_RELATED",
  payload: movies
});

export {
  loadMovies,
  setMovies,
  loadGenres,
  setGenres,
  emitLogin,
  onLogin,
  getMovie,
  setMovie,
  getRelatedMovies,
  setRelatedMovies
};
