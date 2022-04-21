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

const SketchContainer = (props) => {
  // create 30 rows of 30 boxes
  const rows = [];
  for (let i = 1; i <= 30; i++) {
    rows.push(<Row id={`${i}`} />);
  }
  return <div id="drawboard">{rows}</div>;
};

export default SketchContainer;
