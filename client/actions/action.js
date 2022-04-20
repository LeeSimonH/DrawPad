/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

export const createDrawingActionCreator = (drawingId) => ({
  type: types.CREATE_DRAWING,
  payload: drawingId,
});
