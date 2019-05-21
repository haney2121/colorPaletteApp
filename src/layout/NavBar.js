
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import styles from "../styles/NavBarStyles";

const NavBar = (props) => {
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  const { level, changeLevel, changeFormat, showSlider, classes } = props;

  const handleChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    changeFormat(e.target.value);

    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }

  const closeSnackBar = () => {
    setOpen(false);
  }

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showSlider && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #fff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={open} autoHideDuration={3000} message={<span>Format to {format}</span>} ContentProps={{ 'aria-describedby': 'message-id' }} onClose={closeSnackBar} action={[
        <IconButton color="inherit" key="close" aria-label="close"><CloseIcon onClick={closeSnackBar} /></IconButton>
      ]} />
    </header>
  )
}

export default withStyles(styles)(NavBar);