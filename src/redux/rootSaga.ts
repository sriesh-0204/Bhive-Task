import { all } from "redux-saga/effects";
import spaceListSaga from "./sagas/spaceReviewSaga";

function* rootSaga() {
  yield all([
    ...spaceListSaga,
  ]);
}

// exports
export default rootSaga;