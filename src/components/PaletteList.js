import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from '../layout/MiniPalette';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../styles/PaletteListStyles';

const PaletteList = props => {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const { classes, palettes, removePalette } = props;

  const goToPalette = id => {
    props.history.push(`/palette/${id}`);
  }

  const openDialog = (id) => {
    setOpen(true);
    setDeleteId(id);
  }
  const closeDialog = () => {
    setOpen(false);
    setDeleteId('');
  }

  const handleDelete = () => {
    removePalette(deleteId);
    closeDialog();
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <span><Link to="/palette/new">Create Palette</Link></span>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette, index) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                openDialog={openDialog}
                goToPalette={goToPalette}
                key={palette.id}
                id={palette.id}
                {...palette} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog open={open} onClose={closeDialog} aria-labelledby="delete-dialog-title">
        <DialogTitle id="delete-dialog-title">Delete this palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Delete</ListItemText>
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Cancel</ListItemText>
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default withStyles(styles)(PaletteList);