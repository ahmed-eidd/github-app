import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {fetchRepos,
fetchReposSuccess,fetchReposFail} from './slice'
import axios from 'axios';
import * as api from './api'

function* fetchReposSaga ({payload}) {
  try {
    const response = yield call(api.fetchRepos)
    yield put(fetchReposSuccess(response.data))
    console.log(response.data)
  } catch(error) {
    yield put(fetchReposFail())
    console.log(error)
  }
}

export default function*() {
  yield takeLatest(fetchRepos, fetchReposSaga)
}