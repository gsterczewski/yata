
import React from "react";
import useDnd from "hooks/dnd";
import TodoList from "components/todo/TodoList";
import TodoFilters from "components/todo/TodoFilters";
import TodoInput from "components/todo/TodoInput";
import useTodos from "hooks/useTodos";
import "./todo.css";
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