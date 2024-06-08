import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
    SPACELIST_REQUEST,
    triggerSpaceListSuccess,
    triggerSpaceListError,
} from "../actions/spaceReviewAction";
import axios from "axios";

// worker sagas - SLAVES
function* spaceListItemSaga() {
    try {
        const response = yield call(axios.get("https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json"))
        const apiData = response.data;
        yield put(triggerSpaceListSuccess(apiData));
    } catch (e) {
        yield put(triggerSpaceListError(e));
    }
}

// watcher saga - MASTER
function* spaceListWatcherSaga() {
    yield takeLatest(SPACELIST_REQUEST, spaceListItemSaga);
}

const spaceListSaga = [fork(spaceListWatcherSaga)];

// exports
export default spaceListSaga;
