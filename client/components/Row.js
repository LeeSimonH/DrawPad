/**
 * ************************************
 *
 * @module  Row
 * @author
 * @date
 * @description presentation component that renders a row of boxes that can be filled by hovering over them
 *
 * ************************************
 */

import React from 'react';
import Box from './Box';

const Row = (props) => {
  const rowId = props.id;
  // create 50 boxes, push to row
  const boxes = [];
  if (props.grid) {
    let row = props.grid[props.rowIndex];
    let boxIndex = 0;
    for (let boxVal of row) {
      boxes.push(
        <Box
          id={`${rowIndex}-${boxIndex}`}
          key={`${rowIndex}-${boxIndex}`}
          boxVal={boxVal}
        />
      );
    }
  } else {
    for (let i = 0; i < 50; i++) {
      boxes.push(
        <Box id={`${rowId}-box${i}`} key={`${rowId}-box${i}`} boxVal="box" />
      );
    }
  }

  return (
    <div className="row" id={props.id}>
      {boxes}
    </div>
  );
};

export default Row;
