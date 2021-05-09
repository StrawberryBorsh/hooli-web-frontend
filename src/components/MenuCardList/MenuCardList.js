import React from 'react';

import './MenuCardList.css';
import MenuCard from "../MenuCard/MenuCard";

import image_01 from '../../images/tom-yam.jpeg';
import image_02 from '../../images/philli.jpeg';
import image_03 from '../../images/gunkan-mcloud.jpeg';

function MenuCardList() {
  return(
    <section className="menu-card-list">
      <MenuCard image={image_01}/>
      <MenuCard image={image_02}/>
      <MenuCard image={image_03}/>
    </section>
  );
}

export default MenuCardList;
