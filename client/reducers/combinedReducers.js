/**
 * ************************************
 *
 * @module  combinedReducers.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import drawingsReducer from './drawingsReducer';

// import all reducers here
// import marketsReducer from './marketsReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  drawings: drawingsReducer,
});

// make the combined reducers available for import
export default reducers;
