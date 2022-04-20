import React from "react";
import css from './Header.module.css'
import Buttons from './Buttons/Buttons';
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <div className="logo"><Link to='/'><img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt="" className="src"/></Link></div>
            <Buttons />
        </header>
    )
}

export default Header;