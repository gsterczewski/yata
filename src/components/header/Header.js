
import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

import "./header.css";

export default function Header({theme, handleSwitchTheme}){
   const computedClass = `header header--theme-${theme}`
    return (
        <header className={computedClass}>
            <div className="header__row">
            <h1 className="header__app-title">TODO</h1>
            <ThemeSwitch theme={theme} handleSwitchTheme={handleSwitchTheme} />
            </div>
        </header>
    )
}
