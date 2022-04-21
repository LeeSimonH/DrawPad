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
  let filled = false;
  function fillBox(e) {
    console.log('box filled!');
    filled = true;
  }

  return (
    <div
      id={props.id}
      className="box"
      style={{
        backgroundColor: filled ? 'black' : 'white',
      }}
      onClick={fillBox}
    ></div>
  );
};

export default Box;
