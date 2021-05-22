import React, {useState} from "react";

import './Popup.css';
import QrReader from 'react-qr-reader';

function Popup({ isOpened, onClose, title }) {
  const [result, setResult] = useState('ничего неть');

  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return(
    <div className={`popup ${isOpened && "popup_is-opened"}`}>
      <div className="popup__container">
        <button type="button"
                className="popup__close"
                onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        {isOpened &&
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{width: '100%'}}
        />}
        <p className="popup__error">{result}</p>
      </div>
    </div>
  );
}

export default Popup;
