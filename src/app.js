import React, { useState, useEffect } from "react";
import "./global.css";
import Header from "./components/header/Header";
//import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
function App(){
  const themes = Object.freeze({
    light: "light",
    dark: "dark"
  })
  const [activeTheme, setActiveTheme ] = useState(themes.light);
  const switchTheme = () => ( activeTheme === themes.light ? setActiveTheme(themes.dark) : setActiveTheme(themes.light) )
  const computedClass = `theme-${activeTheme}`
  
    return (
        <div className={computedClass}>
            <Header theme={activeTheme} handleSwitchTheme={switchTheme}/>
        </div>
    )
}

export default App;