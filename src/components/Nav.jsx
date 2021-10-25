import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Nav.scss'

const Nav = () => {

  return (
    <nav className="sticky-top navbar">
      <ul className="nav-links">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
