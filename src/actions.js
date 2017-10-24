import * as c from './constants';


export const start = () => ({
  type: c.START_APP,
});

export const changeSetup = (key, val) => ({
  type: c.SETUP,
  payload: {
    key, val
  }
});

export const success = (key) => ({
  type: c.SUCCESS,
  payload: key,
});

export const hideLogin = () => ({
  type: c.HIDE_LOGIN,
});

export const setToken = () => {
  return changeSetup(c.stage.tokenFind, 'yeah');
};

export const findToken = () => ({
  type: c.TOKEN_FIND,
});