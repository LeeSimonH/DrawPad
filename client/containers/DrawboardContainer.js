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

const { newDrawingId } = store.getState().drawings;
const mapStateToProps = (state) => ({ newDrawingId: newDrawingId });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

class DrawBoardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DrawBoard props:', this.props);
    // console.log(store.getState());

    const { newDrawingId, createDrawing } = this.props;
    return (
      <div className="container">
        <Grid />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawBoardContainer);
