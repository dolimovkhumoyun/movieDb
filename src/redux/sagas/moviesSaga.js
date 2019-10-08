import { call, put, takeEvery } from "redux-saga/effects";
import { setMovies } from "../actions";
import { getMovies } from "../api";

function* handleMovieLoad(action) {
  const movies = yield call(getMovies, action.value);
  yield put(setMovies(movies));
}

export default function* watchMovieLoad() {
  yield takeEvery("LOAD", handleMovieLoad);
}
