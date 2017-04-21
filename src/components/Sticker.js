import React from 'react';
import Draggable from 'react-draggable';

const Sticker = (props) => {

  const style = {
    transform: `scale(${props.scale}) rotate(${props.rotation}deg)`,
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
