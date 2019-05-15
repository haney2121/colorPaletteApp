import React, { useState, useEffect } from 'react';

import ColorBox from './ColorBox';
import '../styles/Palette.css';

const SingleColorPalette = props => {
  const [shades, setShades] = useState([]);
  const { colorId, palette } = props;

  useEffect(() => {
    setShades(gatherShades(palette, colorId))
  }, [])

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

  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">
        {shades.map(shade => (
          <ColorBox key={shade.id} name={shade.name} background={shade.hex} showLink={false} />
        ))}
      </div>
    </div>
  )
}

export default SingleColorPalette;