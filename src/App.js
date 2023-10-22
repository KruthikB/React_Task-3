// src/App.js
import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  return (
    <div className="App">
      <ColorPicker
        colors={[
          'Red',
          'Blue',
          'Pink',
          'Black',
          'White',
          'Brown',
          'Green',
          'Yellow',
          'Orange',
          'Violet',
          'Maroon',
          'lightblue',
          'Purple',
          'Grey',
          'Cream',
        ]}
      />
    </div>
  );
}

export default App;
