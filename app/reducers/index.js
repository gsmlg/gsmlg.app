// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import dns from './dns';

const rootReducer = combineReducers({
  dns,
  counter,
  router,
});

export default rootReducer;
