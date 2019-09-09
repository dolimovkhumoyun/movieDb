import { call, put, takeEvery } from "redux-saga/effects";
import { onLogin } from "../actions";
import { emitLogin, socket } from "../api";

function* handleLogin(payload) {
  yield call(emitLogin, payload.payload);
  helo();

  socket.on("err", function(data) {
    helo(data);
  });
  //   yield put(onLogin());
}

function* helo(data) {
  console.log(data);
}

export default function* watchLogin() {
  yield takeEvery("EMIT_LOGIN", handleLogin);
}
