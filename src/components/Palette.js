import React, { useState } from 'react';
import NavBar from '../layout/NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from '../layout/PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const { paletteName, emoji, colors, id } = props.palette;
  const { classes } = props;

  const changeFormat = (val) => {
    setFormat(val);
  }

  const colorBoxes = colors[level].map((color) => (
    <ColorBox key={color.id} background={color[format]} name={color.name} id={color.id} paletteId={id} showLink={true} />
  ))

  const changeLevel = (level) => {
    setLevel(level);
  }


  return (
    <div className={classes.Palette}>
      <NavBar changeLevel={changeLevel} level={level} changeFormat={changeFormat} showSlider={true} />
      <div className={classes.colors}>
        {colorBoxes}
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  )
}

export default withStyles(styles)(Palette);