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
      scale: "1",
      rotation: "0",
      x: 0,
      y: 0,
      zIndex: 1,
      stickerSrc: "http://i.imgur.com/A8eQsll.jpg"
    }
    newStickerArray.push(sticker);

    this.setState({
      stickers: newStickerArray
    });

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
