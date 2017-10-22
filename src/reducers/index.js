import { combineReducers } from 'redux';
import monitor from './monitor';
import setup from './setup';
import loginVisible from './loginVisible';

export default combineReducers({
  monitor,
  setup,
  loginVisible,
});

