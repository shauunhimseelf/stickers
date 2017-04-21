import React from 'react'
import Sticker from './Sticker.js';

class StickerArea extends React.Component{

  render() {

    return (
      <div className="stickerArea">
        {
          this.props.stickers.map((sticker, i) =>
            <Sticker
              className="stickerDefault"
              {...sticker}
              key={i}
            />
          )
        }
      </div>
    )
  }
};

export default StickerArea
