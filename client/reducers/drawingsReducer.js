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
  currentDrawing: {},
  synced: true,
};

function getCurrentDrawingData() {
  // get the current drawing from the DOM
  const currentDrawing = document.querySelector('.drawBoard').firstElementChild;
  // get true/false data on whether each box is filled or not
  const data = {
    drawingId: currentDrawing.id,
    grid: [],
  };
  Array.from(currentDrawing.children).forEach((row) => {
    const rowData = [];
    Array.from(row.children).forEach((box) => {
      rowData.push(Array.from(box.classList).join(''));
    });
    data.grid.push(rowData);
  });
  return data;
}

function clearCurrentDrawing() {
  // get the current drawing from the DOM
  const currentDrawing = document.querySelector('.drawBoard').firstElementChild;
  // get true/false data on whether each box is filled or not
  const data = {
    drawingId: currentDrawing.id,
    grid: [],
  };
  Array.from(currentDrawing.children).forEach((row) => {
    const rowData = [];
    Array.from(row.children).forEach((box) => {
      box.classList.remove('filled');
      rowData.push(Array.from(box.classList).join(''));
    });
    data.grid.push(rowData);
  });
  return data;
}

const drawingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_DRAWING:
      // create matrix that represents the sketch grid
      const blankGrid = [];
      // 50 rows
      for (let i = 1; i <= 50; i++) {
        const rowArr = [];
        // 50 boxes in each row
        for (let j = 1; j <= 50; j++) {
          // each box initially empty (filled = false)
          rowArr.push(false);
        }
        blankGrid.push(rowArr);
      }

      // save the current drawing
      const currentDrawingData = getCurrentDrawingData();

      // create new drawing object from provided data
      const newDrawing = {
        drawingId: state.newDrawingId,
        grid: blankGrid,
      };

      // reset drawing board

      console.log('current drawing saved, ');
      console.log('and new drawing created!');
      console.log(currentDrawingData);

      return {
        ...state,
        drawingList: state.drawingList.slice().concat(currentDrawingData),
        // increment new drawing Id by 1 for next drawing
        newDrawingId: state.newDrawingId + 1,
        currentDrawing: newDrawing,
        synced: false,
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

    case types.SAVE_DRAWING:
      const savedDrawingData = getCurrentDrawingData();

      console.log(`drawing ${savedDrawingData.drawingId} saved`);

      return {
        ...state,
        // save current drawing into drawing list
        currentDrawing: savedDrawingData,
        synced: false,
      };

    case types.CLEAR_DRAWING:
      const clearedDrawing = clearCurrentDrawing();
      return {
        ...state,
        currentDrawingData: clearedDrawing,
        synced: false,
      };

    case types.SYNC_DRAWINGS:
      return {
        ...state,
        synced: true,
      };

    case types.LOAD_DRAWINGS:
      const { currentDrawing, drawingList, newDrawingId } = action.payload;

      return {
        ...state,
        drawingList: drawingList,
        newDrawingId: newDrawingId,
        currentDrawing: currentDrawing,
      };

    default: {
      return state;
    }
  }
};

export default drawingsReducer;
