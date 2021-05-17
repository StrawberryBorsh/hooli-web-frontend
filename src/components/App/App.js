import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import MenuCardList from "../MenuCardList/MenuCardList";
import Main from "../Main/Main";
import MainPage from "../MainPage/MainPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  const [cards, setCards] = useState('');

  return (
    <div className="page">

      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn}/>
        </Route>

        <Route exact path="/menu">
          <MenuCardList />
        </Route>

        <Route path="*">
          <h1>404 - Not Found (Temporary page)</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
