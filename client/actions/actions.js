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
import * as api from '../api/index.js';

export const createDrawing = (event) => (dispatch, getState) => {
  event.preventDefault();
  const drawingId = getState().drawings.newDrawingId;
  console.log(drawingId);
  if (drawingId) {
    dispatch({
      type: types.CREATE_DRAWING,
      payload: drawingId,
    });
  }
};

export const saveDrawing = (drawingId) => ({
  type: types.SAVE_DRAWING,
  payload: drawingId,
});

export const clearDrawing = () => ({
  type: types.CLEAR_DRAWING,
});

export const deleteDrawing = (drawingId) => ({
  type: types.DELETE_DRAWING,
  payload: drawingId,
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
