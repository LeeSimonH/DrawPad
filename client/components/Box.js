/**
 * ************************************
 *
 * @module  Box
 * @author
 * @date
 * @description presentation component that fills itself in when hovered
 *
 * ************************************
 */

import React from 'react';

const Box = (props) => {
  return (
    <div
      id={props.id}
      className="box"
      onMouseOver={(e) => {
        e.target.className += 'filled';
      }}
    ></div>
  );
};

export default Box;
