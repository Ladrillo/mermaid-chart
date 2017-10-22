import * as c from '../constants';

const defaultState = {
  appStart: false,
  threadsStart: false,
  tokenFind: false,
  loggedIn: false,
  dbInitialize: false,
  schemaMatch: false,
  dbCreate: false,
  periodicSyncStart: false,
  appDisplay: false,
};

export default function monitor(state = defaultState, action) {
  switch (action.type) {
    case c.SUCCESS:
      return { ...state, [action.payload]: true };

    case c.FAILURE:
      return { ...state, [action.payload]: false };

    default:
      return state;
  }
}
