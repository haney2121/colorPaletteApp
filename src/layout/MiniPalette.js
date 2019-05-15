import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: "150px",
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    padding: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    margin: '0 0 0 0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative"
  }
}

const MiniPalette = props => {
  const { classes, paletteName, emoji, colors, handleClick } = props;

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>
        {colors.map(color => (
          <div key={color.name} className={classes.miniColor} style={{ background: color.color }}></div>
        ))}
      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);