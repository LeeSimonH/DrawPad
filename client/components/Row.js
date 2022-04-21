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
  const { rowId } = props.id;
  // create 30 boxes, push to row
  const boxes = [];
  for (let i = 1; i <= 30; i++) {
    boxes.push(<Box id={`${rowId}-${i}`} />);
  }
  return <div className="row">{boxes}</div>;
};

export default Row;
