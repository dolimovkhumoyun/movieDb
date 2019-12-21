import { all, takeLatest } from "redux-saga/effects";

import { call, put } from "redux-saga/effects";
import { setMovies, setMovie, setGenres } from "../actions";
import { getMovies, getMovie, getGenres } from "../api";

function* rootSaga() {
  yield all([
    takeLatest("LOAD", handleMovieLoad),
    takeLatest("GET_MOVIE", fetchMovie),
    takeLatest("LOAD_GENRES", handleGenresLoad)
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

export default rootSaga;
