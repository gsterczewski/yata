
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { filterStates } from "config";

export default function useTodos(){

  const filterTodos = (todos, filter) => {
    switch(filter){
      case filterStates.all:
        return todos
      case filterStates.completed:
        return todos.filter(todo => todo.isCompleted)
      case filterStates.active:
        return todos.filter(todo => !todo.isCompleted)
    }
  }

  const [todos, setTodos] = useState([{
    id:"todo-1",
    title:"do something",
    isCompleted: false
  },{
    id:"todo-2",
    title:"do something 2",
    isCompleted: true
  }])

  const [activeFilter, setActiveFilter] = useState(filterStates.all);
  const [todosLeft, setTodosLeft] = useState(0);
  
  const [todosToShow, setTodosToShow] = useState(filterTodos(todos,activeFilter));

  useEffect(()=>{
    setTodosToShow(filterTodos(todos,activeFilter))
  },[activeFilter,todos])
  useEffect(()=>{
    setTodosLeft(todos.filter(todo => !todo.isCompleted).length)
    
  },[todos])
  
  const showAllTodos = () => {
    
    setActiveFilter(filterStates.all)
  }
  const showCompletedTodos = () => {
    setActiveFilter(filterStates.completed)
    console.log(activeFilter)
  }
  const showActiveTodos = () => {
    setActiveFilter(filterStates.active)
    
  }

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
  const addTodo = title => {
    const newTodo = ({
      id: v4(),
      isCompleted: false,
      title
    })
    const newTodos = [...todos]
    newTodos.push(newTodo)
    setTodos(newTodos)
  }

  return {
    addTodo,
    deleteTodo,
    clearCompleted,
    toggleTodo,
    setTodos,
    showActiveTodos,
    showAllTodos,
    showCompletedTodos,
    todos,
    todosToShow,
    todosLeft,
    activeFilter
  }
}