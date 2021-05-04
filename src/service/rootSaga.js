import { fork, put } from 'redux-saga/effects';
import reposSaga from '../store/repos/saga';

export default function* rootSaga() {
  yield fork(reposSaga);
}
