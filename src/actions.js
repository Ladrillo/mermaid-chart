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
