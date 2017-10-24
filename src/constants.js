// action types
export const START_APP = 'START_APP';
export const START_APP_IN_PROGRESS = 'START_APP/IN_PROGRESS';

export const START_THREADS = 'START_THREADS';
export const START_THREADS_IN_PROGRESS = 'START_THREADS_IN_PROGRESS';

export const TOKEN_FIND_IN_PROGRESS = 'TOKEN_FIND_IN_PROGRESS';
export const TOKEN_FIND = 'TOKEN_FIND';

export const SHOW_LOGIN = 'SHOW_LOGIN';
export const HIDE_LOGIN = 'HIDE_LOGIN';

export const INIT_DB_IN_PROGRESS = 'INIT_DB_IN_PROGRESS';
export const DB_INIT = 'DB_INIT';

// monitor
export const appStart = 'appStart';
export const threadsStart = 'threadsStart';
export const tokenFind = 'tokenFind';
export const loggedIn = 'loggedIn';
export const dbInitialize = 'dbInitialize';
export const schemaMatch = 'schemaMatch';
export const dbCreate = 'dbCreate';
export const periodicSyncStart = 'periodicSyncStart';
export const appDisplay = 'appDisplay';

export const stage = {
  appStart: 'appStart',
  threadsStart: 'threadsStart',
  tokenFind: 'tokenFind',
  loggedIn: 'loggedIn',
  dbInitialize: 'dbInitialize',
  schemaMatch: 'schemaMatch',
  dbCreate: 'dbCreate',
  periodicSyncStart: 'periodicSyncStart',
  appDisplay: 'appDisplay',
};

// setup
export const SETUP = 'SETUP';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// misc
export const REDIRECT_TO_LOGIN = 'REDIRECT_TO_LOGIN';
export const LEAVE_LOGIN = 'LEAVE_LOGIN';