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
import Thumbnail from '../components/Thumbnail';

const { newDrawingId, drawingList } = store.getState().drawings;
const mapStateToProps = (state) => ({
  newDrawingId: newDrawingId,
  drawingList: drawingList,
});

class StorageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('StorageContainer props:', this.props);
    // destructure the array of drawings out of the props
    const { drawingList } = this.props;

    // populate storage thumbnails with the drawings
    const thumbnails = [];
    // drawingList.forEach((drawing) => {
    //   drawings.push(
    //     <Drawing
    //       className="thumbnail"
    //       // key={newDrawingId}
    //       // id={newDrawingId}
    //     />
    //   );
    // });
    for (let i = 0; i < 5; i++) {
      thumbnails.push(
        <Thumbnail
          key={i}
          // id={newDrawingId}
        />
      );
    }

    return (
      <div id="storage">
        {thumbnails}
        <DrawingCreator
          newDrawingId={newDrawingId}
          createDrawing={createDrawing}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(StorageContainer);
