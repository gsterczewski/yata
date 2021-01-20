import { useState, useEffect } from "react";
import { v4 } from "uuid";

export default function useTodos(){
  
  const [todos, setTodos] = useState([{
    id:"todo-1",
    title:"do something",
    isCompleted: false
  },{
    id:"todo-2",
    title:"do something 2",
    isCompleted: true
  }])

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
    todosLeft,
    setTodos,
    todos
  }
}