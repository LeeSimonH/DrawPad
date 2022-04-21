/**
 * ************************************
 *
 * @module  Grid
 * @author
 * @date
 * @description presentation component that renders a grid of rows of boxes
 *              that can be filled by hovering over them
 *
 * ************************************
 */

import React from 'react';
import Row from './Row';

const Grid = (props) => {
  // create 50 rows of 50 boxes
  const rows = [];

  console.log('current drawing:', props.currentDrawing);

  // iterate through each array(row) of current drawing
  if (props.currentDrawing.grid) {
    for (let row of currentDrawing.grid) {
      rows.push(
        <Row
          id={`row-${currentDrawing.grid.indexOf(row)}`}
          key={`row-${currentDrawing.grid.indexOf(row)}`}
          rowIndex={currentDrawing.grid.indexOf(row)}
          grid={currentDrawing.grid}
        />
      );
    }
  } else {
    for (let i = 1; i <= 50; i++) {
      rows.push(<Row id={`row-${i}`} key={`row-${i}`} />);
    }
  }

  return (
    <div key="drawboard" id={`${props.id}`}>
      {rows}
    </div>
  );
};

export default Grid;
