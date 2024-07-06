import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos]=useState([]);

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
      .then(function(todos){
        setTodos(response.data.todos)
      })
  },[todos]);

  return (
  <div>
  {todos.map(todo =><Todo title={todos.title} description={todos.description}/>)}
  </div>
  )
}

export default App
