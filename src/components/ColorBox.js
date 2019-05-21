import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorBoxStyles';

const ColorBox = props => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  const { name, background, id, paletteId, showLink, classes } = props;
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${copied &&
            classes.showOverlay}`}
        />
        <div
          className={`${classes.copyMessage} ${copied &&
            classes.showMessage}`}
        >
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showLink && (
          <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default withStyles(styles)(ColorBox);