//imports
import { useState, useReducer } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem'

//functions
function newtoDo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function reducer(currtoDos, action){
  switch (action.type) {
    case 'add-toDo':
      return[currtoDos, newtoDo(action.payload.name)]
    case 'edit-toDo':
  }
}

//export default function of App
export default function App() {

  const [itToDos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")

  function actSubmit(e){
    e.preventDefault()
    dispatch({ type: 'add-toDo', payload: {name: name}})
    setName('')
  }
  
  return (
    <>
      <form onSubmit={actSubmit}> 
        <input type='text'
        value={name}
        onChange={e => setName(e.target.value)}/>
      </form>
      {itToDos.map(items =>{ //running the ToDoItem component through the itToDos state.
        console.log(items)
        return <ToDoItem key={items.id} items={items} />
      })}
    </>
  )
}

 
