import React from 'react';
import css from './Buttons.module.css'
import {Link} from "react-router-dom";
function Buttons() {
    return (
        <div className={css.registration}>
            <div><Link to='/registration'><input type="button" value="Sign up"/></Link></div>
            <div><Link to='/registration'><input type="button" value="Sign in"/></Link></div>
            </div>
    )
}

export default Buttons;