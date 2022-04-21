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
  drawingList: [],
  newDrawingId: 10001,
  newDrawingName: '',
};

const drawingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_DRAWING:
      // create new drawing object from provided data
      const newDrawing = {
        drawingId: state.newDrawingId,
        name: action.payload,
      };

      // push the new drawing onto a copy of the drawing list
      const newDrawingList = state.drawingList.slice(); // shallow copy of the drawing list array
      newDrawingList.push(newDrawing); // push new drawing object onto list w/ ID

      console.log('new drawing created!');

      return {
        ...state,
        drawingList: newDrawingList,
        newDrawingId: state.newDrawingId + 1,
      };

    case types.DELETE_DRAWING:
      // get the id of the drawing to be deleted
      const targetDrawingId = action.payload;

      // find the drawing in the drawing list

      // delete the drawing from the market list
      const shortenedDrawingList = state.drawingList.slice();

      return {
        ...state,
        drawingList: shortenedDrawingList,
      };

    case types.UPDATE_DRAWING_NAME:
      return {
        ...state,
        newDrawingName: action.payload,
      };

    case types.FILL_BOX:
      // get the box by its id
      const boxId = action.payload;
    // const boxToFill = state.drawingList[indexOfBox]
    // set its "filled" property to be true
    // boxToFill.filled = true;

    // apply a style to it

    default: {
      return state;
    }
  }
};

export default drawingsReducer;
