
import React from "react";
import ThemeSwitch from "../ThemeSwitch";

import "./header.css";

export default function Header({theme, handleSwitchTheme}){
   
    return (
        <header className="header">
            <div className="header__row">
            <h1 className="header__app-title">TODO</h1>
            <ThemeSwitch theme={theme} handleSwitchTheme={handleSwitchTheme} />
            </div>
        </header>
    )
}
