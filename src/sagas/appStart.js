import { call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import async from './async';
import * as c from '../constants';


function* appStart(action) {
  yield put({ type: c.START_APP_IN_PROGRESS });

  const isSuccessful = yield call(async, c.stage.appStart);

  if (isSuccessful) {
    yield put({ type: c.SUCCESS, payload: c.stage.appStart });
    yield put({ type: c.START_THREADS });
  }

  else {
    yield put({ type: c.FAILURE, payload: c.stage.appStart });
    yield call(appStart);
  }
}


export function watchStartApp() {
  return takeLatest(c.START_APP, appStart);
}
