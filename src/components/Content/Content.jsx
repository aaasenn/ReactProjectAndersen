import React from "react";
import css from './Content.module.css';
import {Route, Routes} from "react-router-dom";
import Registration from "./Registration/Registration";
import Tabs from "./Tabs/Tabs"


function Content() {
    return (
        <div>
        <Routes>
            <Route path='/' element={<Tabs />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
        </div>
    )
}

export default Content;