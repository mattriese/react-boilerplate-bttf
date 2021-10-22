import React from 'react';

import Banner from './bttf.png';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div>
      <Img src={Banner} alt="Back to the Future - Logo" />
      <NavBar>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/addQuote">Add Quote</HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
