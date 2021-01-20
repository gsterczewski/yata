
import React from "react";
import Todo from "./Todo";
import BasicBar from "./BasicBar";

export default function TodoList({todos, dndFunctions, todosLeft, deleteTodo, toggleTodo, handleClearCompleted}){
  return(
    <ul className="todos rounded">
            {todos.map((todo) => 
            <li key={todo.id} id={todo.id} 
              draggable="true" 
              onDragStart={dndFunctions.handleDragstart} 
              onDragEnter={dndFunctions.handleDragenter} 
              onDragOver={dndFunctions.handleDragover}
              onDrop={dndFunctions.handleDrop}>
                <Todo todo={todo} handleToggle={toggleTodo} handleDelete={deleteTodo}></Todo>
            </li>
            )}
            <BasicBar classes="todos__summary">
              <span>{todosLeft} items left</span>
              <button className="todos__clear-button" onClick={handleClearCompleted}>Clear Completed</button>
            </BasicBar>
      </ul>
  )
}