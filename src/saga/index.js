/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// sagas
import authSagas from "./auth";
// import rootFunc from "./root";

export default function* rootSaga(getState) {
  yield all([authSagas()]);
  // yield all([rootFunc()]);
}
