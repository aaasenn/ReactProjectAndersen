import React from "react";
import css from './Registration.module.css'

function Registration() {

    return (
        <form action="">
            <div className={css.inputs}>
                <label>
                    <p>Login:</p>
                <input type="text" name="" id="login"/>
            </label>

            <label>
                <p>Password:</p>
                <input type="password" name="" id="login"/>
            </label>
            </div>

            <div className={css.buttons}>
                <input type="button" value="Sign up"/>
                <input type="button" value="Cancel"/>
            </div>
        </form>
    )
}

export default Registration;