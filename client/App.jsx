import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = getInitialState();
  }

  render() {
    return (
      <div id="screen">
        <div id="map"></div>
        <div id="search-bar"></div>
      </div>
    );
  }
}

export default App;