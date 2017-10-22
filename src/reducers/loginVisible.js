import * as c from '../constants';

const defaultState = false;

export default function loginVisible(state = defaultState, action) {
  switch (action.type) {
    case c.REDIRECT_TO_LOGIN:
      return true;

    case c.LEAVE_LOGIN:
      return false;

    default:
      return state;
  }
}
