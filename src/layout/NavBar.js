import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = (props) => {
  const [format, setFormat] = useState('hex');

  const { level, changeLevel, changeFormat } = props;

  const handleChange = (e) => {
    setFormat(e.target.value);
    changeFormat(e.target.value);
  }

  return (
    <header className="NavBar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #fff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  )
}

export default NavBar;