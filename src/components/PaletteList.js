import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import MiniPalette from '../layout/MiniPalette';

const styles = {
  root: {
    background: '#30404F',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    diplay: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: '#fff',
    alignItems: 'center',
    '& a': {
      color: '#fff',
      textDecoration: 'none'
    },
    '& a:hover': {
      boxShadow: '0px 2px #fff'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
}

const PaletteList = props => {
  const { classes, palettes } = props;

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
            <MiniPalette handleClick={() => goToPalette(palette.id)} key={index} {...palette} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList);