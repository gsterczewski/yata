
import React from "react";
import useDnd from "../hooks/dnd";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";
import TodoInput from "./TodoInput";
import useTodos from "../hooks/useTodos";

export default function TodosContainer(){
  
  const { todos, addTodo, deleteTodo, toggleTodo, clearCompleted, todosLeft, setTodos } = useTodos();
  const  dndFunctions  = useDnd(todos, setTodos);
 
  return(
    <>
    <TodoInput handleAddTodo={addTodo} />
    <TodoList todos={todos} dndFunctions={dndFunctions} todosLeft={todosLeft} deleteTodo={deleteTodo} toggleTodo={toggleTodo} handleClearCompleted={clearCompleted} />
    <TodoFilters />
  </>
  )
}