import { call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import async from './async';
import * as c from '../constants';


function* threadsStart(action) {
  yield put({ type: c.START_THREADS_IN_PROGRESS });

  const isSuccessful = yield call(async, c.stage.threadsStart);

  if (isSuccessful) {
    yield put({ type: c.SUCCESS, payload: c.stage.threadsStart });
    yield put({ type: c.TOKEN_FIND });
  }

  else {
    yield put({ type: c.FAILURE, payload: c.stage.threadsStart });
    yield call(threadsStart);
  }
}

export function watchStartThreads() {
  return takeLatest(c.START_THREADS, threadsStart);
}
