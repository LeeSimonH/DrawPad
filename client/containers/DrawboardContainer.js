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
import Drawing from '../components/Drawing';
import DrawingCreator from '../components/DrawingCreator.js';

const { newDrawingId } = store.getState().drawings;
const mapStateToProps = (state) => ({ newDrawingId: newDrawingId });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

class DrawingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DrawingContainer props:', this.props);
    // console.log(store.getState());

    const { newDrawingId, createDrawing } = this.props;
    return (
      <div id="drawingContainer" className="container">
        <Drawing />
        <DrawingCreator
          newDrawingId={newDrawingId}
          createDrawing={createDrawing}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingContainer);
