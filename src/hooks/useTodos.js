
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { filterStates, stubTodos } from "config";
import useLocalStore from "hooks/useLocalStore";

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

  const [todos, setTodos] = useState([])
  const [activeFilter, setActiveFilter] = useState(filterStates.all);
  const [todosLeft, setTodosLeft] = useState(0);
  const [todosToShow, setTodosToShow] = useState(filterTodos(todos,activeFilter));
  const store = useLocalStore("todos");
  
  // it should run once on mount
  useEffect(()=>{
    const itemsFromStore = store.getAll()
    setTodos(itemsFromStore ? itemsFromStore : stubTodos);
  },[])

  useEffect(()=>{
    setTodosToShow(filterTodos(todos,activeFilter))
  },[activeFilter,todos])
  
  useEffect(()=>{
    setTodosLeft(todos.filter(todo => !todo.isCompleted).length)
    store.save(todos)
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
    
    const shouldDelete = window.confirm("This will delete all of your completed todos from local storage");
    
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