import React from 'react'
import { useState } from 'react'

interface contentProps {
  content:string;
  handleChange:(c:string)=>void;
}

const TodoContent = ({ content, handleChange }:contentProps) => {
  return (
    <div className="todo-content">
      <p>
        <textarea className="content-area"
          defaultValue={content}
          onChange={(e)=>handleChange(e.target.value)}>
        </textarea>
      </p>
    </div>
  )
}

export default TodoContent