import { call, put, takeEvery } from "redux-saga/effects";
import { setGenres } from "../actions";
import { getGenres } from "../api";

function* handleGenresLoad(payload) {
  const genres = yield call(getGenres, payload.value);
  yield put(setGenres(genres));
}

export default function* watchGenresLoad() {
  yield takeEvery("LOAD_GENRES", handleGenresLoad);
}
