import { all, takeLatest } from "redux-saga/effects";

import { call, put } from "redux-saga/effects";
import {
  setMovies,
  setMovie,
  setGenres,
  setRelatedMovies,
  setDiscovered,
  setUser,
  setSearch
} from "../actions";
import {
  getMovies,
  getMovie,
  getGenres,
  getRelatedMovies,
  getDiscoveredMovies,
  getSearchMovies
} from "../api";

function* rootSaga() {
  yield all([
    takeLatest("LOAD", handleMovieLoad),
    takeLatest("GET_MOVIE", fetchMovie),
    takeLatest("LOAD_GENRES", handleGenresLoad),
    takeLatest("GET_RELATED", handleRelatedLoad),
    takeLatest("GET_DISCOVERED", handleDiscovered),
    takeLatest("GET_SEARCH", handleSearch)
  ]);
}

function* handleMovieLoad(action) {
  const movies = yield call(getMovies, action.value);
  yield put(setMovies(movies));
}

function* fetchMovie(action) {
  const movie = yield call(getMovie, action.payload);
  yield put(setMovie(movie));
}

function* handleGenresLoad(payload) {
  const genres = yield call(getGenres, payload.value);
  yield put(setGenres(genres));
}

function* handleRelatedLoad(action) {
  const movies = yield call(getRelatedMovies, action.payload);
  yield put(setRelatedMovies(movies));
}

function* handleDiscovered(action) {
  const movies = yield call(getDiscoveredMovies, action.payload);
  yield put(setDiscovered(movies));
}

function* handleSearch(action) {
  const movies = yield call(getSearchMovies, action.payload);
  yield put(setSearch(movies));
}

export default rootSaga;
