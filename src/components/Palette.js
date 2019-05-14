import React, { useState } from 'react';

import NavBar from '../layout/NavBar';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const { paletteName, emoji, colors } = props.palette;

  const changeFormat = (val) => {
    setFormat(val);
  }

  const colorBoxes = colors[level].map((color) => (
    <ColorBox key={color.name} background={color[format]} name={color.name} />
  ))

  const changeLevel = (level) => {
    setLevel(level);
  }


  return (
    <div className="Palette">
      <NavBar changeLevel={changeLevel} level={level} changeFormat={changeFormat} />
      <div className="Palette-colors">
        {colorBoxes}
      </div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  )
}

export default Palette;