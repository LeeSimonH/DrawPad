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
  const { loadDrawings, createDrawing, saveDrawing, clearDrawing } = props;

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
      <button id="load-drawing" onClick={loadDrawings}>
        Load Drawings
      </button>
    </div>
  );
};

export default DrawingCreator;
