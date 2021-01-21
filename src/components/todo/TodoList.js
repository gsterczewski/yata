
import React, {  useEffect } from "react";
import Todo from "./Todo";
import Sortable from "sortablejs";


export default function TodoList({todos, deleteTodo, toggleTodo, setTodos}){
  
  useEffect(()=>{
    if(todos.length > 0){
      const sortable = new Sortable(document.getElementById("js-sortable-todos"))    
    }
  },[todos])

  return(
    <ul className="todos rounded" id="js-sortable-todos" >
            {todos.map((todo) => 
            <li key={todo.id} id={todo.id} 
              draggable="true" 
              >
                <Todo todo={todo} handleToggle={toggleTodo} handleDelete={deleteTodo}></Todo>
            </li>
            )}
      </ul>
  )
}