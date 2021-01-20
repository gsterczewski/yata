import React, { useState } from "react";
import "./global.css";
import Header from "./components/header/Header";
import TodosContainer from "./components/TodosContainer";

function App(){
  const themes = Object.freeze({
    light: "light",
    dark: "dark"
  })
  const [activeTheme, setActiveTheme ] = useState(themes.light);
  const switchTheme = () => ( activeTheme === themes.light ? setActiveTheme(themes.dark) : setActiveTheme(themes.light) )
  const computedClass = `layout-wrapper theme-${activeTheme}`
  
  return (
        <div className={computedClass}>
            <Header theme ={activeTheme} handleSwitchTheme={switchTheme}/>
            <main className="main">
              <TodosContainer />      
            </main>
            <aside className="info">
              <p>Drag and drop to reorder the list</p>
            </aside>
        </div>
    )
}

export default App;