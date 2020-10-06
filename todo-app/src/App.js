import React, {useState, useEffect} from 'react';
import './App.css';

import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(
      getLocalTodos,
      []
  )

  useEffect(
      filterHandler,
      [status, todos] 
  )

  useEffect(
      saveLocalTodos,
      [todos]
  )


  function filterHandler() {
      switch(status) {
          case "completed": 
              setFilteredTodos(todos.filter(todo => todo.completed === true))
              break;
          case "uncompleted": 
              setFilteredTodos(todos.filter(todo => todo.completed === false))
              break;
          default:
              setFilteredTodos(todos);
              break;
      }
  }

  function getLocalTodos() {
      if(localStorage.getItem("todos") !== null) {
        let localTodos = JSON.parse(localStorage.getItem("todos"))
        setTodos(localTodos)
      }
      else
          localStorage.setItem("todos", JSON.stringify([]))

  }

  function saveLocalTodos() {
      localStorage.setItem("todos", JSON.stringify(todos))
  }

  return (
    <div className="App">

      <header>
          <h1>Lista de afazeres</h1>
      </header>

      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />

      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
