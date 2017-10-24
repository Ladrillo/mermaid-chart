import { call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import async from './async';
import * as c from '../constants';


function* tokenFind(action) {
  yield put({ type: c.TOKEN_FIND_IN_PROGRESS });

  const isSuccessful = yield call(async, c.stage.tokenFind);

  if (isSuccessful) {
    yield put({ type: c.SUCCESS, payload: c.stage.tokenFind });
    yield put({ type: c.DB_INIT });
  }

  else {
    yield put({ type: c.FAILURE, payload: c.stage.tokenFind });
    yield put({ type: c.SHOW_LOGIN });
  }
}

export function watchFindToken() {
  return takeLatest(c.TOKEN_FIND, tokenFind);
}
