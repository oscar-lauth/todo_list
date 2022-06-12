import React from 'react'
import { useState } from 'react'

interface contentProps {
  content:string;
  setContent:(content:object)=>void;
}

const TodoContent = ({ content, setContent }:contentProps) => {
  return (
    <div className="todo-content">
      <p>
        <textarea className="content-area"
          value={content}
          onChange={setContent}>
        </textarea>
      </p>
    </div>
  )
}

export default TodoContent