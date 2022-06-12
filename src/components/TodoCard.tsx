import React from 'react'
import TodoTitle from './TodoTitle'
import TodoContent from './TodoContent'

export interface TodoCardProps {
  title?: string;
  content?: string;
}

const TodoCard = ({ title, content }:TodoCardProps) => {
  return (
    <div className="todo-card">
      <TodoTitle title={title}/>
      <TodoContent content={content} />
    </div>
  )
}

export default TodoCard
