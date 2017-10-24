import { call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';


export default function* async(stage) {
  const state = yield select();
  yield delay(1500);
  return state.setup[`${stage}Allowed`];
}
