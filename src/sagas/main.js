import { call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as c from '../constants';


function* async(stage) {
  const state = yield select();
  yield delay(1500);
  return state.setup[`${stage}Allowed`];
}

function* appStart(action) {
  yield put({ type: c.START_APP_IN_PROGRESS });

  const isSuccessful = yield call(async, c.stage.appStart);

  if (isSuccessful) {
    yield put({ type: c.SUCCESS, payload: c.stage.appStart });
    return true;
  }

  else {
    yield put({ type: c.FAILURE, payload: c.stage.appStart });
    yield call(appStart);
  }
}

function* threadsStart(action) {
  yield put({ type: c.START_THREADS_IN_PROGRESS });

  const isSuccessful = yield call(async, c.stage.threadsStart);

  if (isSuccessful) {
    yield put({ type: c.SUCCESS, payload: c.stage.threadsStart });
    return true;
  }

  else {
    yield put({ type: c.FAILURE, payload: c.stage.threadsStart });
    yield call(threadsStart);
  }
}

function* tokenFind(action) {
  yield put({ type: c.TOKEN_FIND_IN_PROGRESS });
  
    const isSuccessful = yield call(async, c.stage.tokenFind);
  
    if (isSuccessful) {
      yield put({ type: c.SUCCESS, payload: c.stage.tokenFind });
      return true;
    }
  
    else {
      yield put({ type: c.FAILURE, payload: c.stage.tokenFind });
    }
}

function* loggedIn(action) {
  
}

function* main(action) {
  var started = yield call(appStart);

  if (started) {
    var threadsStarted = yield call(threadsStart);
  }

  if (threadsStarted) {
    var tokenFound = yield call(tokenFind);
  }

  if (tokenFound) {
    yield true;
  } else {
    yield false;
  }
}

export function watchStartApp() {
  return takeLatest(c.START_APP, main);
}
