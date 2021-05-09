import React from 'react';

import './Header.css';

function Header({ loggedIn }) {
  return(
    <header className="header">
      <button className="header__burger" />
    </header>
  );
}

export default Header;
