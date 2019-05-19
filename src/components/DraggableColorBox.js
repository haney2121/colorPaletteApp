import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    maxWidth: '384px;',
    margin: '-3.5px'
  }
}

const DraggableColorBox = props => {
  const { color, name, classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>{name}</div>
  )
}

export default withStyles(styles)(DraggableColorBox);