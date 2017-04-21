import React, { Component } from 'react';
import StickerArea from './StickerArea.js';
import update from 'immutability-helper';

class StickerContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      stickers: []
    };
    this.addSticker = this.addSticker.bind(this);
  }

  addSticker() {
    let newStickerArray = [...this.state.stickers];
    const sticker = {
      name: "sticker",
      scale: this.randomVal(0.9, 1.1),
      rotation: this.randomVal(-30, 30),
      x: this.randomVal(0, 600),
      y: this.randomVal(0, 600),
      zIndex: this.state.stickers.length + 1,
      stickerSrc: "http://i.imgur.com/A8eQsll.jpg"
    }
    newStickerArray.push(sticker);

    this.setState({
      stickers: newStickerArray
    });

  }

  randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return(
      <div>
        <StickerArea stickers={this.state.stickers} />
        <button className="addStickerButton" onClick={this.addSticker}>Add sticker</button>
      </div>
    );
  }
}

export default StickerContainer;
