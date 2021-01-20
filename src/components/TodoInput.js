
import React, { useState } from "react";
import BasicBar from "./BasicBar";

export default function TodoInput({ handleAddTodo }){
  const [todoTitle, setTodoTitle] = useState("");
  
  const handleChange = event => {
    setTodoTitle(event.target.value);
  }
  
  const submitTodo = () => {
    if(todoTitle && todoTitle.length > 0){
      handleAddTodo(todoTitle)
    }
}
const handleKeypress = event => {
  if(event.key === "Enter"){
    submitTodo()   
  }
}
  return (
    <BasicBar classes="todo-input rounded">
      <button onClick={submitTodo} className="circle-indicator"></button>
      <input onKeyDown={handleKeypress} type="text" placeholder="Create a new todo" onChange={handleChange} />
    </BasicBar>
  )
}