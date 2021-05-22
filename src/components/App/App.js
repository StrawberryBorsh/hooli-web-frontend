import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import MenuCardList from "../MenuCardList/MenuCardList";
import Main from "../Main/Main";

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  // ====== Обработчики попапров =========


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
