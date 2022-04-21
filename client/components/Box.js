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

const Box = ({ id, boxVal }) => {
  let filled = false;

  return (
    <div
      id={id}
      className={boxVal}
      onMouseOver={(e) => {
        e.target.classList.add('filled');
      }}
    ></div>
  );
};

export default Box;
