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
  const { createDrawing, newDrawingId, updateDrawingName } = props;

  return (
    <div id="drawingCreator">
      <form onSubmit={createDrawing}>
        <input
          id="new-drawing"
          value=""
          onChange={(e) => {
            updateDrawingName(e.target.value);
          }}
        />
        <button id="create-drawing" className="primary" type="submit">
          Create Drawing
        </button>
      </form>
    </div>
  );
};

export default DrawingCreator;
