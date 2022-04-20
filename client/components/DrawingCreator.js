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

const DrawingCreator = (props) => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div id="drawingCreator">
    <h3>Create New Drawing</h3>
    <label htmlFor="drawinginput">New Drawing Name:</label>
    <input type="text" id="drawinginput" />
    <button id="createDrawing" onClick={props.createDrawing}>
      Create Drawing
    </button>
  </div>
);

export default DrawingCreator;
