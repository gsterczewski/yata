
import React from "react";
import Todo from "./Todo";
import BasicBar from "components/BasicBar";

export default function TodoList({todos, dndFunctions,  deleteTodo, toggleTodo}){
  return(
    <ul className="todos rounded">
            {todos.map((todo) => 
            <li key={todo.id} id={todo.id} 
              draggable="true" 
              onDragStart={dndFunctions.handleDragstart} 
              onDragEnter={dndFunctions.handleDragenter} 
              onDragOver={dndFunctions.handleDragover}
              onDragEnd={dndFunctions.handleDragend}
              onDrop={dndFunctions.handleDrop}>
                <Todo todo={todo} handleToggle={toggleTodo} handleDelete={deleteTodo}></Todo>
            </li>
            )}
      </ul>
  )
}