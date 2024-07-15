//imports
import { useState, useReducer } from 'react'
import './App.css'

//functions
function reducer(reducState, action){

}

export default function App() {

  const [state, dispatch] = useReducer(reducer, {})
  const [name, setName] = useState("")

  return (
    <>
      <form>
        <input type='text'
        value={name}
        onChange={e => setName(e.target.value)}/>
      </form>
    </>
  )
}

 
