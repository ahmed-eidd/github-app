import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {fetchRepos,
fetchReposSuccess,fetchReposFail, setReposCount} from './slice'
import axios from 'axios';
import * as api from './api'

function* fetchReposSaga ({payload}) {
  console.log(payload)
  try {
    const response = yield call(api.fetchRepos,payload)
    yield put(fetchReposSuccess(response.data.items))
    yield put(setReposCount(response.data.total_count))
  } catch(error) {
    yield put(fetchReposFail())
    console.log(error)
  }
}

export default function*() {
  yield takeLatest(fetchRepos, fetchReposSaga)
}