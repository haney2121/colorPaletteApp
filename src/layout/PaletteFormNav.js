import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SavePaletteForm from '../components/SavePaletteForm';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Button from "@material-ui/core/Button";
import styles from '../styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false
    }
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ formShowing: true });
  };
  hideForm() {
    this.setState({ formShowing: false })
  }


  render() {
    const { classes, open, palettes, handleSubmit } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position='fixed'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create a Palette
            </Typography>

          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/"><Button variant="contained" color="secondary">Go Back</Button></Link>
            <Button variant="contained" color="primary" onClick={this.showForm}>
              Save
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing &&
          <SavePaletteForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />
        }
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);