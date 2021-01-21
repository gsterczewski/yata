
import React, {  useEffect } from "react";
import Todo from "./Todo";
import Sortable from "sortablejs";


export default function TodoList({todos, deleteTodo, toggleTodo, setTodos}){
  
  function swapElementsInArray(arr, index1,index2){
    const copy = [...arr]
    const temp = copy[index1];
    copy[index1] = copy[index2];
    copy[index2] = temp
    return copy;
  }
  useEffect(()=>{
    if(todos.length > 0){
      const sortable = new Sortable(document.getElementById("js-sortable-todos"),{
        onEnd : (event)=>{
          console.log(todos)
           setTodos(swapElementsInArray(todos,event.oldIndex, event.newIndex))
        }

      })
      
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