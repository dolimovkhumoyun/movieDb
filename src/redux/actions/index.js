const loadMovies = (page = 1) => ({
  type: "LOAD",
  value: page
});

const setMovies = movies => ({
  type: "LOAD_SUCCESS",
  movies
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

export { loadMovies, setMovies, loadGenres, setGenres, emitLogin, onLogin };
