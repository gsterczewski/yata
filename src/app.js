import React, { useState } from "react";
import "./global.css";
import Header from "./components/header/Header";
import BasicBar from "./components/BasicBar";
import Todo from "./components/Todo";
function App(){
  const themes = Object.freeze({
    light: "light",
    dark: "dark"
  })
  const [activeTheme, setActiveTheme ] = useState(themes.light);
  const switchTheme = () => ( activeTheme === themes.light ? setActiveTheme(themes.dark) : setActiveTheme(themes.light) )
  const computedClass = `layout-wrapper theme-${activeTheme}`
  const [todos, setTodos] = useState([{
    id:1,
    title:"do something",
    isCompleted: false
  },{
    id:2,
    title:"do something 2",
    isCompleted: true
  }])
    return (
        <div className={computedClass}>
            <Header theme ={activeTheme} handleSwitchTheme={switchTheme}/>
            <main className="main">

            <BasicBar  classes="todo-input rounded">
              <span className="circle-indicator"></span>
              <input type="text" placeholder="Create a new todo" />
            </BasicBar>
            <ul className="todos rounded">
            {todos.map(todo => 
            <li key={todo.id}>
                <Todo todo={todo}></Todo>
            </li>
            )}
            <li>
            <BasicBar classes="todos__summary">
              <span>5 items left</span>
              <button>Clear Completed</button>
            </BasicBar>
            </li>
            </ul>
            <BasicBar  classes="todos__filters rounded">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </BasicBar>
            </main>
            <aside className="info">
              <p>Drag and drop to reorder the list</p>
            </aside>
        </div>
    )
}

export default App;