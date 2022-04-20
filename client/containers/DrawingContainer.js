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
import store from '../store.js';

// import from child components...
import Drawing from '../components/Drawing';
import DrawingCreator from '../components/DrawingCreator.js';

// const { totalDrawings, lastDrawingId, drawingList } = this.props;

const mapStateToProps = (state) => ({
  // lastDrawingId: lastDrawingId,
});

const mapDispatchToProps = (dispatch) => ({
  createDrawing: (drawingId) =>
    dispatch(actions.createDrawingActionCreator(drawingId)),
});

class DrawingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DrawingContainer props:', this.props);
    // console.log(store.getState());

    return (
      <div className="container">
        <Drawing />
        <DrawingCreator
          lastDrawingId={this.props.lastDrawingId}
          createDrawing={this.props.createDrawing}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(DrawingContainer);
