import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { post } from "../services/api";
import { TOASTER_SHOW,TOASTER_HIDE  } from "../constant";
export function* post_(payload) {
  //   console.log("root post_ working");

  const { type } = payload;
  yield put({ type: `${type}_REQUEST` });
  try {
    const response = yield call(post, payload);
    console.log("root post_ response", response);
    if (response.status === 200) {
      yield put({ type: `${type}_SUCCESS`, payload: response.data });
    } else {
      yield put({ type: `${type}_FAIL`, payload: response.data });
    }
    return response;
  } catch (error) {
    yield put({ type: `${type}_ERROR`, payload: error });
  }
}

// export default function* rootWatcher() {
//   yield takeLatest(LOGIN, loginSaga);
//  }
