import React, {useState} from 'react';

import './MenuCard.css';
import {Link} from "react-router-dom";

function MenuCard({ image }) {

  const [quantity, setQuantity] = useState(0);

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return(
    <article className="menu-card">
      <h3 className="menu-card__title">Вкусный товар</h3>
      <img src={image} alt="" className="menu-card__image"/>
      <div className="menu-card__description-wrapper">
        <p className="menu-card__description">Какой-то вкусный текст про товар, и всё вот это вот</p>
        <Link className="menu-card__link" to="/card">Подробнее</Link>
        <div className="menu-card__cart-wrapper">
          <div className="menu-card__price"> 299&nbsp;&#8381;</div>
          <div className="menu-card__add-to-card-wrapper">
            <button className="menu-card__plus-button" onClick={handleDecreaseQuantity}>
              <div className="menu-card__plus-h" />
            </button>
            <p className="menu-card__quantity">{quantity}</p>
            <button className="menu-card__plus-button" onClick={handleIncreaseQuantity}>
              <div className="menu-card__plus-h menu-card__plus-h_plus" />
              <div className="menu-card__plus-v"/>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
