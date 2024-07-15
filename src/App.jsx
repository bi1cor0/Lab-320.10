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
      return[...currtoDos, newtoDo(action.payload.name)]
    case 'check-toDo':
      return currtoDos.map(td => {
        if(td.id === action.payload.id) {
          return { ...td, complete: !td.complete }
        }
        return td;
      })
    case 'delete-toDo':
      return currtoDos.filter(td => td.id !== action.payload.id)

    default:
      return currtoDos;
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
        <button type='submit'>Submit</button>
      </form>
      {itToDos.map(items =>{ //running the ToDoItem component through the itToDos state.
        return <ToDoItem key={items.id} items={items} dispatch={dispatch}/>
      })}
    </>
  )
}

 
