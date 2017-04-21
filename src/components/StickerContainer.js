import React from 'react';
import StickerArea from './StickerArea.js';

import Rebase from 're-base';

var base = Rebase.createClass({
    apiKey: "AIzaSyCB6EbG6wW2D6qXouuVjcinuv3O4d30Wpk",
    authDomain: "react-stickers.firebaseapp.com",
    databaseURL: "https://react-stickers.firebaseio.com"
});

class StickerContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      stickers: []
    };
    this.addSticker = this.addSticker.bind(this);
    this.deleteAllStickers = this.deleteAllStickers.bind(this);

  }

  init(){
      this.ref = base.syncState(`/react-stickers`, {
      context: this,
      asArray: true,
      state: 'stickers'
    });
  }

  componentWillMount() {
    this.init();
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

  deleteAllStickers() {
    this.setState({
      stickers: []
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
        <button className="deleteAllStickersButton" onClick={this.deleteAllStickers}>Delete all stickers</button>

      </div>
    );
  }
}

export default StickerContainer;
