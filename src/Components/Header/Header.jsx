import React from 'react';
import css from './Header.module.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header>
        <ul>
          <li className={`${css.item}`}>Home</li>
          <li className={`${css.item}`}>About</li>
          <li className={`${css.item}`}>Shop</li>
        </ul>
      </header>
  )
}

export default Header;