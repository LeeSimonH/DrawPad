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

// import from child components...
import DrawboardContainer from './DrawboardContainer';
import SidebarContainer from './SidebarContainer.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainContainer">
        <DrawboardContainer />
        <SidebarContainer />
      </div>
    );
  }
}

export default MainContainer;
