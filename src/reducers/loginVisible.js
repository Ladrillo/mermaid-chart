import * as c from '../constants';

const defaultState = false;

export default function loginVisible(state = defaultState, action) {
  switch (action.type) {
    case c.SHOW_LOGIN:
      return true;

    case c.HIDE_LOGIN:
      return false;

    default:
      return state;
  }
}
