import React, { Component } from 'react';
import './App.css';
import StickerContainer from './components/StickerContainer.js';
import firebase from 'firebase';
import reactfire from 'reactfire';

class App extends Component {
  render() {
    return (
      <StickerContainer />
    );
  }
}

export default App;
