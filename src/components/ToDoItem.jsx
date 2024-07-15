import React from 'react'

export default function ToDoItem({ items, dispatch }) {
  return (
    <>
    <div style={{ color: items.complete ? 'gray' : 'black'}}></div>
    <input type='checkbox' onClick={() => dispatch({ type: 'check-toDo', payload: {id: items.id }})}/> {items.name}
    <button >Edit</button>
    <button onClick={() => dispatch({ type: 'delete-toDo', payload: {id: items.id }})}>Delete</button>
    </>
  )
}

