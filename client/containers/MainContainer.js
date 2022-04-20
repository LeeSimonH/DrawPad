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
// import { bindActionCreators } from 'redux';

// import from child components...
import DrawingContainer from './DrawingContainer';
import StorageContainer from './StorageContainer.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainContainer">
        <DrawingContainer />
        <StorageContainer />
      </div>
    );
  }
}

export default MainContainer;
