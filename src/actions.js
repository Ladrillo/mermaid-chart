import * as c from './constants';


export const start = () => ({
  type: c.START_APP,
});

export const setup = (key, val) => ({
  type: c.SETUP,
  payload: {
    key, val
  }
});

export const success = (key) => ({
  type: c.SUCCESS,
  payload: key,
});

export const leaveLogin = () => ({
  type: c.LEAVE_LOGIN
});
