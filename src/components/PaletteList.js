import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from '../layout/MiniPalette';
import styles from '../styles/PaletteListStyles';

const PaletteList = props => {
  const { classes, palettes, removePalette } = props;

  const goToPalette = id => {
    props.history.push(`/palette/${id}`);
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <span><Link to="/palette/new">Create Palette</Link></span>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette, index) => (
            <MiniPalette removePalette={removePalette} handleClick={() => goToPalette(palette.id)} key={palette.id} id={palette.id} {...palette} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList);