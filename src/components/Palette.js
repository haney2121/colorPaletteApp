import React from 'react';

import ColorBox from './ColorBox';
import '../styles/Palette.css';

const Palette = (props) => {
  const colorBoxes = props.colors.map((color) => (
    <ColorBox key={color.name} background={color.color} name={color.name} />
  ))
  return (
    <div className="Palette">
      {/* Navbar here */}
      <div className="Palette-colors">
        {colorBoxes}
      </div>
      {/* footer here */}
    </div>
  )
}

export default Palette;