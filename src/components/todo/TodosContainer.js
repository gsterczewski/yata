
import React from "react";
import TodoList from "components/todo/TodoList";
import TodoFilters from "components/todo/TodoFilters";
import TodoInput from "components/todo/TodoInput";
import TodosSummary from "components/todo/TodosSummary";
import TodosSummaryDesktop from "components/todo/TodosSummaryDesktop";
import useTodos from "hooks/useTodos";
import "./todo.css";
export default function TodosContainer(){
  
  const { addTodo, deleteTodo, toggleTodo, clearCompleted, todosLeft, setTodos, todosToShow, showAllTodos, showCompletedTodos, showActiveTodos, activeFilter } = useTodos();
  
 
  return(
    <>
    <TodoInput handleAddTodo={addTodo} />
    <TodoList todos={todosToShow}  deleteTodo={deleteTodo} toggleTodo={toggleTodo} setTodos={setTodos} />
    <TodosSummary todosLeft={todosLeft} handleClearCompleted={clearCompleted} />
    <TodoFilters handleShowAll={showAllTodos} handleShowCompleted={showCompletedTodos} handleShowActive={showActiveTodos} activeFilter={activeFilter} />
    <TodosSummaryDesktop todosLeft={todosLeft} handleClearCompleted={clearCompleted} handleShowAll={showAllTodos} handleShowCompleted={showCompletedTodos} handleShowActive={showActiveTodos} activeFilter={activeFilter} />
  </>
  )
}