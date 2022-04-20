/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders ...
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.js';

// import from child components...
import DrawingContainer from './DrawingContainer';

const { totalDrawings, lastDrawingId, drawingList } = store.getState().drawings;
const mapStateToProps = (state) => ({
  totalDrawings: totalDrawings,
  lastDrawingId: lastDrawingId,
  drawingList: drawingList,
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(store.getState());

    const { totalDrawings, lastDrawingId, drawingList } = this.props;

    return (
      <div className="container">
        <DrawingContainer
          totalDrawings={totalDrawings}
          lastDrawingId={lastDrawingId}
          drawingList={drawingList}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MainContainer);
