import { post_ } from "./root";
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { LOGIN, SIGN_UP, TOASTER_SHOW } from "../constant";

export function* loginSaga(payload) {
  console.log("loginSaga working");
  const response = yield call(post_, payload);
  if (response.status === 200) {
    yield put({
      type: TOASTER_SHOW,
      payload: {
        show: true,
        autoHide: true,
        status: "success",
        heading: "Successful",
        description: "You have successfully loged in",
      },
    });
  }
}

export function* signUpSaga(payload) {
  yield post_(payload);
}

export default function* authWatcher() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGN_UP, signUpSaga);
}
