/**
 * ************************************
 *
 * @module  DrawingCreator
 * @author
 * @date
 * @description presentation component that takes user input for new drawing creation
 *
 * ************************************
 */

import React from 'react';

const DrawingCreator = (props) => {
  const { createDrawing, saveDrawing, clearDrawing } = props;

  function handleClick(e) {
    e.preventDefault();
    console.log('button clicked');
  }

  return (
    <div id="drawingCreator">
      <button id="clear-drawing" onClick={clearDrawing}>
        Clear Drawing
      </button>
      <button id="save-drawing" onClick={saveDrawing}>
        Save Current Drawing
      </button>
      <button id="create-drawing" onClick={createDrawing}>
        Create New Drawing
      </button>
    </div>
  );
};

export default DrawingCreator;
