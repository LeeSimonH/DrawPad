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
import Drawing from '../components/Drawing';

// ---------------------------------------
// HIERARCHY
// |-- App
//   |-- MainContainer
//      |-- Drawing Container
//         |-- Drawing

// ---------------------------------------

const mapStateToProps = (state) => ({});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(store.getState());

    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MainContainer);
