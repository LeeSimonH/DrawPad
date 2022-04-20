/**
 * ************************************
 *
 * @module  StorageContainer
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  createDrawing: (drawingId) =>
    dispatch(actions.createDrawingActionCreator(drawingId)),
});

class StorageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('StorageContainer props:', this.props);
    // console.log(store.getState());

    return (
      <div className="container">
        {/* previous drawings display (thumbnails) */}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(StorageContainer);
