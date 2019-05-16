import React from 'react';

const PaletteFooter = (props) => {
  const { paletteName, emoji } = props;
  console.log(props);
  return (
    <div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  )
}

export default PaletteFooter;