import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import * as c from '../constants';


function* helloWorld(action) {
  const state = yield select();
  yield put({ type: 'dastate', payload: state });
}

export function watchHelloWorld() {
  return takeLatest(c.HELLO_WORLD, helloWorld);
}
