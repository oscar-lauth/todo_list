import React from 'react'

const TodoTitle = ( { title='Enter title...' } ) => {
  return (
    <div>
      <h2 className="todo-title" contentEditable="true">{title}</h2>
    </div>
  )
}

export default TodoTitle