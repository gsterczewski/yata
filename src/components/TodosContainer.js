
import React, { useState, useEffect } from "react";
import useDnd from "../hooks/dnd";
import TodoList from "./TodoList";

export default function TodosContainer(){
  const [todos, setTodos] = useState([{
    id:"todo-1",
    title:"do something",
    isCompleted: false
  },{
    id:"todo-2",
    title:"do something 2",
    isCompleted: true
  }])
  const dndFunctions  = useDnd(todos, setTodos);
  const [todosLeft, setTodosLeft] = useState(0);
  
  useEffect(()=>{
    setTodosLeft(todos.filter(todo => !todo.isCompleted).length)
  },[todos])
  

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = id => {
    const updateTodo = todo => {
      todo.isCompleted = !todo.isCompleted
      return todo;
    }
    setTodos(todos.map(todo => todo.id === id ? updateTodo(todo): todo ))
  }
  const clearCompleted = () => {
    
    const shouldDelete = window.confirm("Are your sure ?");
    
    if(shouldDelete){
      setTodos(todos.filter(todo => !todo.isCompleted))
    }
  }
  return(<TodoList todos={todos} dndFunctions={dndFunctions} todosLeft={todosLeft} deleteTodo={deleteTodo} toggleTodo={toggleTodo} handleClearCompleted={clearCompleted} />)
}