import React from 'react'
import TodoTitle from './TodoTitle'
import TodoContent from './TodoContent'

interface TodoCardProps {
  title: string;
  content: string;
  setTitle:(c:string)=>void;
  setContent:(c:string)=>void;
}

const TodoCard = ({ title, content, setTitle, setContent }:TodoCardProps) => {
  return (
    <div className="todo-card">
      <TodoTitle title={title} handleChange={setTitle}/>
      <TodoContent content={content} handleChange={setContent} />
    </div>
  )
}

export default TodoCard
