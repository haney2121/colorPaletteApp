import React, { useState } from 'react';

import NavBar from '../layout/NavBar';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeFormat = (val) => {
    setFormat(val);
  }

  const colorBoxes = props.palette.colors[level].map((color) => (
    <ColorBox key={color.name} background={color[format]} name={color.name} />
  ))

  const changeLevel = (level) => {
    setLevel(level);
  }

  return (
    <div className="Palette">
      <NavBar changeLevel={changeLevel} level={level} changeFormat={changeFormat} />
      {/* Navbar here */}
      <div className="Palette-colors">
        {colorBoxes}
      </div>
      {/* footer here */}
    </div>
  )
}

export default Palette;