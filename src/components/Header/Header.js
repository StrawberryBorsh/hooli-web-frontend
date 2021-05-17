import React from 'react';

import './Header.css';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';

function Header({ loggedIn }) {
  return(
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Logo"/>
      </NavLink>
      <button className="header__burger" />
    </header>
  );
}

export default Header;
