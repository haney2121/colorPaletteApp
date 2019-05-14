import React from 'react';

import '../styles/ColorBox.css';

const ColorBox = props => {
  return (
    <div className="ColorBox" style={{ background: props.background }}>
      {props.name}
      <span>MORE</span>
    </div>
  )
}

export default ColorBox;