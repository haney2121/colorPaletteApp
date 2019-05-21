import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../layout/NavBar";
import PaletteFooter from "../layout/PaletteFooter";
import styles from "../styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";

const SingleColorPalette = props => {
  const [shades, setShades] = useState([]);
  const [format, setFormat] = useState('hex');
  const { colorId, palette, classes } = props;

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
    <div className={classes.Palette}>
      <NavBar changeFormat={changeFormat} />
      <div className={classes.colors}>
        {shades.map(shade => (
          <ColorBox key={shade.name} name={shade.name} background={shade[format]} showLink={false} />
        ))}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter {...palette} />
    </div >
  )
}

export default withStyles(styles)(SingleColorPalette);