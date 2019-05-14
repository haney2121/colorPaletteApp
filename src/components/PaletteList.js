import React from 'react';

import { Link } from 'react-router-dom';

const PaletteList = props => {
  const { palettes } = props;
  return (
    <div>
      {palettes.map(palette => (
        <Link exact to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      ))}
    </div>
  )
}

export default PaletteList;