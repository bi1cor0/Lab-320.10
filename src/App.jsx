//imports
import { useState, useReducer } from 'react'
import './App.css'

//functions

function newtoDo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function reducer(currtoDos, action){
  switch (action.type) {
    case 'add-toDo':
      return[currtoDos, newtoDo(action.payload.name)]
  }
}


export default function App() {

  const [state, dispatch] = useReducer(reducer, {})
  const [name, setName] = useState("")

  function actSubmit(e){
    e.preventDefault()
    dispatch({ type: 'add-toDo', payload: {name: name}})
    setName('')
  }
  

  console.log(state)

  return (
    <>
      <form onSubmit={actSubmit}> 
        <input type='text'
        value={name}
        onChange={e => setName(e.target.value)}/>
      </form>
    </>
  )
}

 
