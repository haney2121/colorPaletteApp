import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = props => {
  const { classes, paletteName, emoji, colors, goToPalette, openDialog, id } = props;

  const deletePalette = e => {
    e.stopPropagation();
    openDialog(id);
  }
  const handleClick = () => {
    goToPalette(id);
  }
  return (
    <div className={classes.root} onClick={() => handleClick(id)}>
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} style={{ transition: 'all 0.3s ease-in-out' }} />
      </div>
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