/**
 * ************************************
 *
 * @module  DrawingContainer
 * @author
 * @date
 * @description stateful component that renders ...
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';
import store from '../store.js';

// import from child components...
import Grid from '../components/Grid';

const { newDrawingId, currentDrawing } = store.getState().drawings;
const mapStateToProps = (state) => ({
  currentDrawing: currentDrawing,
  newDrawingId: newDrawingId,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const DrawboardContainer = (props) => {
  const { newDrawingId, currentDrawing } = props;
  console.log('current drawboard id:', newDrawingId);
  return (
    <div className="drawBoard">
      <Grid key="grid" id={`${newDrawingId}`} currentDrawing={currentDrawing} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawboardContainer);
