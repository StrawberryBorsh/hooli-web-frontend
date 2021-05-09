import React from 'react';

import './MenuCard.css';
import {Link} from "react-router-dom";

function MenuCard({ image }) {
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
            <button className="menu-card__plus-button">
              <div className="menu-card__plus-h" />
            </button>
            <p className="menu-card__quantity">0</p>
            <button className="menu-card__plus-button">
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
