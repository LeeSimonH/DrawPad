import React from 'react';
import MainContainer from './containers/MainContainer';

export function App() {
  return (
    <div>
      <h1> Welcome {new Date().toString()} </h1>
      <MainContainer />
    </div>
  );
}
