import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import '../styles/ColorBox.css';

const ColorBox = props => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const { name, background } = props;
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className="ColorBox" style={{ background: background }}>
        <div className={`copy-overlay ${copied && 'show'}`} style={{ background: background }} />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox;