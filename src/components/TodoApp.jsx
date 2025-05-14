import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import FilterBar from './FilterBar'

const TodoApp = () => {
    const [value,setValue]=useState('');
    const [todo,setTodo]=useState([]);
    const [theme,setTheme]=useState('light');
  return (
    <>
     <TodoInput value={{value,setValue,todo,setTodo,theme,setTheme}}/>
      <TodoItem value={{value,setValue,todo,setTodo,theme,setTheme}}/>
      <TodoList value={{value,setValue,todo,setTodo,theme,setTheme}}/>
      <FilterBar value={{value,setValue,todo,setTodo,theme,setTheme}}/>
      </>
  )
}

export default TodoApp