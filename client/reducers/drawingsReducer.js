/**
 * ************************************
 *
 * @module  drawingsReducer
 * @author
 * @date
 * @description reducer for drawings
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalDrawings: 0,
  drawingList: [],
  lastDrawingId: 10000,
};

const drawingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_DRAWING:
      // create new drawing object from provided data
      const newDrawing = {
        drawingId: action.payload,
      };

      // push the new drawing onto a copy of the drawing list
      newDrawingList = state.drawingList.slice(); // shallow copy of the drawing list array
      newDrawingList.push(newDrawing); // push new drawing object onto list w/ ID

      return {
        ...state,
        drawingList: newDrawingList,
        totalDrawings: state.totalDrawings + 1,
        lastDrawingId: state.lastDrawingId + 1,
      };

    default: {
      return state;
    }
  }
};

export default drawingsReducer;
