import { call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { Spacelist, spacelistError, spacelistSuccess } from "../slices/spaceListSlice";
import { SagaIterator } from "redux-saga";

// worker sagas - SLAVES
function* spaceListItemSaga(): SagaIterator{
    try {
        const response = yield call(axios.get, "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json")
        const apiData = response.data;
        yield put(spacelistSuccess(apiData));
    } catch (e) {
        yield put(spacelistError());
    }
}

// watcher saga - MASTER
function* spaceListWatcherSaga():SagaIterator {
    yield takeLatest(Spacelist.actions.spacelistRequest, spaceListItemSaga);
}

const spaceListSaga = [fork(spaceListWatcherSaga)];

// exports
export default spaceListSaga;