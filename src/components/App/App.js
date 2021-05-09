import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from "../Header/Header";
import MenuCard from "../MenuCard/MenuCard";
import MenuCardList from "../MenuCardList/MenuCardList";

function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  const [cards, setCards] = useState('');

  return (
    <div className="page">
      <Header loggedIn={loggedIn}/>
      <MenuCardList />
    </div>
  );
}

export default App;
