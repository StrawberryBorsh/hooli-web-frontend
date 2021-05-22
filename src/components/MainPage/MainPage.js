import React, {useState} from 'react';

import './MainPage.css';
import Popup from "../Popup/Popup";

function MainPage() {
  const [cameraIsOpened, setCameraIsOpened] = useState(false);

  /**
   * Закрытие поп-апов по клику на оверлей
   */
  function handleClosePopupWithOverlayClick(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
      setCameraIsOpened(false);
    }
  }

  function handleOnCloseScanner() {
    setCameraIsOpened(false);
    window.removeEventListener('click', handleClosePopupWithOverlayClick);
  }

  function handleScanQR() {
    setCameraIsOpened(true);
    window.addEventListener('click', handleClosePopupWithOverlayClick);
  }

  return(
    <>
      <section className="main-page">
        <h2 className="main-page__title">Заказываю...</h2>
        <article className="main-page__article">
          <button type="button" className="main-page__button" onClick={handleScanQR}/>
          <h3 className="main-page__subtitle">в ресторане</h3>
        </article>
      </section>

      <Popup
        isOpened={cameraIsOpened}
        title="Отсканируйте QR-код на столе"
        onClose={handleOnCloseScanner}
      />
    </>
  );
}

export default MainPage;
