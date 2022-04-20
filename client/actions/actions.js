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

export const createDrawing = (dispatch, getState) => {
  event.preventDefault();
  const drawingName = getState().drawings.newDrawingName;
  if (drawingName) {
    dispatch({
      type: types.CREATE_DRAWING,
      payload: drawingName,
    });
  }
};

export const deleteDrawing = (drawingId) => ({
  type: types.DELETE_DRAWING,
  payload: drawingId,
});

export const updateDrawingName = (data) => ({
  type: types.UPDATE_DRAWING_NAME,
  payload: data,
});
