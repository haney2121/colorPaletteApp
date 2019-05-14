import React, { useState } from 'react';

import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Palette.css';

const Palette = (props) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = props.palette.colors[level].map((color) => (
    <ColorBox key={color.name} background={color.hex} name={color.name} />
  ))

  const changeLevel = (level) => {
    setLevel(level);
  }

  return (
    <div className="Palette">
      <div className="slider">
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
      </div>
      {/* Navbar here */}
      <div className="Palette-colors">
        {colorBoxes}
      </div>
      {/* footer here */}
    </div>
  )
}

export default Palette;