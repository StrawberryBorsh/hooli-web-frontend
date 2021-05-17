import React from "react";

import './Main.css';
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";

function Main({ loggedIn }) {
  return(
    <main className="content">
      <Header loggedIn={loggedIn}/>
      <MainPage />
    </main>
  );
}

export default Main;
