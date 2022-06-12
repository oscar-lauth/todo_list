import React from 'react'

interface titleProps {
  title:string;
  handleChange:(c:string)=>void;
}

const TodoTitle = ({ title, handleChange }:titleProps) => {
  return (
    <div>
      <input className="todo-title"
          defaultValue={title}
          onChange={(e)=>handleChange(e.target.value)}>
        </input>
    </div>
  )
}

export default TodoTitle