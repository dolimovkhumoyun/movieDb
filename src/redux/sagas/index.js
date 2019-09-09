import { all, fork } from "redux-saga/effects";
import watchMovieLoad from "./moviesSaga";
import watchGenresLoad from "./genresSaga";
import watchLogin from "./loginSaga";

function* rootSaga() {
  yield all([fork(watchMovieLoad), fork(watchGenresLoad), fork(watchLogin)]);
}

export default rootSaga;
