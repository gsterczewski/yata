import React from "react";
import BasicBar from "components/BasicBar";
export default function Todo({todo, handleToggle, handleDelete}){
  const classes = {
    title : todo.isCompleted ? "todo__title todo__title--completed" : "todo__title",
    indicator: todo.isCompleted ? "circle-indicator circle-indicator--checked" : "circle-indicator" 
  }
  
  const handleClick  = () => {
    handleToggle(todo.id)
  }
  return (
    <BasicBar classes="todo">
    <button className={classes.indicator} onClick={handleClick}  role="checkbox" aria-checked={todo.isCompleted} aria-label="Toggle todo completed" tabIndex="0">
      {todo.isCompleted && <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>}
    </button>
      <p className={classes.title}>{todo.title}</p>
      <button className="todo__close-button" onClick={() =>handleDelete(todo.id)}>
        
        <svg  xmlns="http://www.w3.org/2000/svg" className="close-icon" width="18" height="18"><path d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>

        </button>
    
    </BasicBar>
    
  )
}