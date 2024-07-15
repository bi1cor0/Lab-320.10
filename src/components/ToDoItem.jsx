import React from 'react'

export default function ToDoItem({ itToDo }) {
  return (
    <>
    <div style={{ color: itToDo.complete ? 'gray' : 'black'}}>{itToDo.name}</div>
    <button>Edit</button>
    <button>Delete</button>
    console.log({ itToDo })
    </>
  )
}

