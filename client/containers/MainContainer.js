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

const MainContainer = () => {
  return (
    <div id="mainContainer">
      <DrawboardContainer key="drawboard-container" />
      <SidebarContainer />
    </div>
  );
};

export default MainContainer;
