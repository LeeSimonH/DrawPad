import React from 'react';
import MainContainer from './containers/MainContainer';

// ---------------------------------------
// HIERARCHY
// |-- App
//   |-- MainContainer
//      |-- *Drawing Container
//         |-- Drawing Creator
//         |-- Drawing
//      |-- *Storage Container
//         |-- Previous Drawings

// ---------------------------------------

const App = (props) => {
  return (
    <div id="app">
      <h1>Sketchbook</h1>
      <MainContainer />
    </div>
  );
};

export default App;

// export function App() {
//   return (
//     <div id="app">
//       <h1> Sketchbook </h1>
//       <MainContainer />
//     </div>
//   );
// }
