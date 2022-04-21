/**
 * ************************************
 *
 * @module  Thumbnail
 * @author
 * @date
 * @description presentation component that renders a thumbnail of a drawing
 *
 * ************************************
 */

import React from 'react';
import Grid from './Grid';

const Thumbnail = (props) => {
  <div className="thumbnail">{props.id.slice(-5)}</div>;
};

export default Thumbnail;
