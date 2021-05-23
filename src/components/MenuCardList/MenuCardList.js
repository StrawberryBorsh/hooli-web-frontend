import React, {useEffect, useState} from 'react';

import './MenuCardList.css';
import MenuCard from "../MenuCard/MenuCard";

import image_02 from '../../images/philli.jpeg';
import image_03 from '../../images/gunkan-mcloud.jpeg';
import api from "../../utils/api";
import Header from "../Header/Header";

function MenuCardList(props) {

  const [cardImage, setCardImage] = useState({});

  useEffect(() => {
    api.getCard()
      .then((res) => {
        setCardImage({
          image: res.url,
          title: res.name,
        });
      })
      .catch((err) => console.log(err));
  }, [])

  return(
    <div className="content">
      <Header loggedIn={props.loggedIn} />
      <section className="menu-card-list">
        <MenuCard
          image={cardImage.image}
          title={cardImage.title}
        />
        <MenuCard image={image_02}/>
        <MenuCard image={image_03}/>
      </section>
    </div>
  );
}

export default MenuCardList;
