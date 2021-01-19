import React from "react";
import BasicBar from "./BasicBar";
export default function Todo({todo, handleToggleCompleted}){

  return (
    <BasicBar classes="todo">
    <span className="circle-indicator"></span>
      <p className="todo__title">{todo.title}</p>
      <span onClick={handleToggleCompleted}>X</span>
    </BasicBar>
    
  )
}