import React, { PropTypes } from 'react';
import Draggable from 'react-draggable';

const Sticker = (props) => {

  const style = {
    scale: props.scale,
    rotation: props.rotation,
    left: props.x,
    top: props.y,
    zIndex: props.zIndex
  }

  return (
    <Draggable>
      <div className="sticker">
        <img draggable="false" src={props.stickerSrc} alt={props.name} style={style}/>
      </div>
    </Draggable>
  )
}

export default Sticker
