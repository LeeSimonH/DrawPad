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

import axios from 'axios';
import * as types from '../constants/actionTypes';

export const createDrawing = (event) => (dispatch, getState) => {
  event.preventDefault();
  const drawingName = getState().drawings.newDrawingName;
  if (drawingName) {
    dispatch({
      type: types.CREATE_DRAWING,
      payload: drawingName,
    });
  } else
    dispatch({
      type: types.CREATE_DRAWING,
      payload: 'empty test',
    });
};

export const deleteDrawing = (drawingId) => ({
  type: types.DELETE_DRAWING,
  payload: drawingId,
});

export const updateDrawingName = (data) => ({
  type: types.UPDATE_DRAWING_NAME,
  payload: data,
});

export const fillBox = (boxId) => ({
  type: types.FILL_BOX,
  payload: boxId,
});

export const syncDrawings = () => (dispatch, getState) => {
  axios
    .put('/drawings', getState().drawings.drawingList)
    .then(({ status }) => {
      if (status === 200) dispatch({ type: types.SYNC_DRAWINGS });
    })
    .catch(console.error);
};

export const loadDrawings = () => (dispatch) => {
  axios
    .get('/drawings')
    .then(({ data }) => {
      dispatch({
        type: types.LOAD_DRAWINGS,
        payload: data,
      });
    })
    .catch(console.error);
};
