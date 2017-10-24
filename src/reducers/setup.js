import * as c from '../constants';

const defaultState = {
  appStartAllowed: true,
  threadsStartAllowed: true,
  tokenFindAllowed: false,
  loggedInAllowed: true,
  dbInitializeAllowed: true,
  schemaMatchAllowed: true,
  dbCreateAllowed: true,
  periodicSyncStartAllowed: true,
  appDisplayAllowed: true,
};


export default function setup(state = defaultState, action) {
  switch(action.type) {
    case c.SETUP:
      const { key, val } = action.payload;
      return { ...state, [`${key}Allowed`]: val ? true : false };

    default:
      return state;
  }
}
