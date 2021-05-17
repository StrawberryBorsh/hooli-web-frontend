import React, {useState} from 'react';

import './MainPage.css';

function MainPage() {
  const [cameraIsOpened, setCameraIsOpened] = useState(false);

  function handleScanQR() {
  }

  return(
    <section className="main-page">
      <h2 className="main-page__title">Заказываю...</h2>
      <article className="main-page__article">
        <button type="button" className="main-page__button" onClick={handleScanQR}/>
        <h3 className="main-page__subtitle">в ресторане</h3>
      </article>
    </section>
  );
}

export default MainPage;
