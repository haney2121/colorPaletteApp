import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../layout/NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from '../layout/PaletteFooter';
import '../styles/Palette.css';
import '../styles/ColorBox.css';

const SingleColorPalette = props => {
  const [shades, setShades] = useState([]);
  const [format, setFormat] = useState('hex');
  const { colorId, palette } = props;

  useEffect(() => {
    setShades(gatherShades(palette, colorId))
  }, [colorId, palette])

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter(color => {
        return color.id === colorToFilterBy
      }))
    }
    return shades.slice(1);
  }

  const changeFormat = (val) => {
    setFormat(val);
  }

  return (
    <div className="Palette SingleColorPalette">
      <NavBar changeFormat={changeFormat} />
      <div className="Palette-colors">
        {shades.map(shade => (
          <ColorBox key={shade.name} name={shade.name} background={shade[format]} showLink={false} />
        ))}
        <div className="go-Back ColorBox">
          <Link className="back-button" to={`/palette/${palette.id}`}>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter {...palette} />
    </div >
  )
}

export default SingleColorPalette;