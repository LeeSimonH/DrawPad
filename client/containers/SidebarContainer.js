/**
 * ************************************
 *
 * @module  SidebarContainer
 * @author
 * @date
 * @description stateful component that renders ...
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import store from '../store.js';
import { bindActionCreators } from 'redux';

// import from child components...
import Thumbnail from '../components/Thumbnail';
import DrawingCreator from '../components/DrawingCreator';

const { newDrawingId, drawingList } = store.getState().drawings;
const mapStateToProps = (state) => ({
  newDrawingId: newDrawingId,
  drawingList: drawingList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const SidebarContainer = (props) => {
  // destructure the array of drawings out of the props
  const {
    drawingList,
    newDrawingId,
    createDrawing,
    saveDrawing,
    clearDrawing,
    loadDrawings,
  } = props;

  // populate storage thumbnails with the drawings
  const thumbnails = [];

  const drawingListLastIndex = drawingList.length - 1;

  if (drawingListLastIndex >= 0) {
    for (let i = drawingListLastIndex; i <= 0; i--) {
      const drawing = drawingList[i];
      thumbnails.push(
        <Thumbnail
          key={`${drawing.drawingId}`}
          id={`thumnail-${drawing.drawingId}`}
        />
      );
      console.log('new thumbnail created');
    }
  }

  console.log(thumbnails);

  return (
    <div id="storage">
      <div id="thumbnails">{thumbnails}</div>

      <DrawingCreator
        currentDrawingId={newDrawingId - 1}
        createDrawing={createDrawing}
        saveDrawing={saveDrawing}
        clearDrawing={clearDrawing}
        loadDrawings={loadDrawings}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
