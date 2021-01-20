
import React from "react";
import useDnd from "hooks/dnd";
import TodoList from "components/todo/TodoList";
import TodoFilters from "components/todo/TodoFilters";
import TodoInput from "components/todo/TodoInput";
import TodosSummary from "components/todo/TodosSummary";
import useTodos from "hooks/useTodos";
import "./todo.css";
export default function TodosContainer(){
  
  const { addTodo, deleteTodo, toggleTodo, clearCompleted, todosLeft, setTodos, todosToShow, showAllTodos, showCompletedTodos, showActiveTodos, activeFilter } = useTodos();
  const  dndFunctions  = useDnd(todosToShow, setTodos);
 
  return(
    <>
    <TodoInput handleAddTodo={addTodo} />
    <TodoList todos={todosToShow} dndFunctions={dndFunctions} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    <TodosSummary todosLeft={todosLeft} handleClearCompleted={clearCompleted} />
    <TodoFilters handleShowAll={showAllTodos} handleShowCompleted={showCompletedTodos} handleShowActive={showActiveTodos} activeFilter={activeFilter} />
  </>
  )
}