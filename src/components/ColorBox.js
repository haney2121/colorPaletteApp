import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

import '../styles/ColorBox.css';

const ColorBox = props => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  const { name, background, id, paletteId, showLink } = props;
  const isDarkColor = chroma(background).luminance() <= 0.2;
  const isLightColor = chroma(background).luminance() >= 0.7;
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className="ColorBox" style={{ background: background }}>
        <div className={`copy-overlay ${copied && 'show'}`} style={{ background: background }} />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>Copied!</h1>
          <p className={isLightColor ? 'dark-text' : ''}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? 'light-text' : ''}>{name}</span>
          </div>
          <button className={isLightColor ? 'dark-text copy-button' : 'copy-button'}>Copy</button>
        </div>
        {showLink && (
          <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
            <span className={isLightColor ? 'dark-text see-more' : 'see-more'}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox;