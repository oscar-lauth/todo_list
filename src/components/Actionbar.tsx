import React from 'react'

interface ActionbarProps {
    onAddTodo:()=>void;

}

const Actionbar = ({ onAddTodo }:ActionbarProps) => {
  return (
    <div className="actionbar">
        <button className="add-todo_btn material-symbols-outlined" onClick={onAddTodo}>add</button>
        <button className="save-todo_btn material-symbols-outlined" onClick={onAddTodo}>done</button>
    </div>
  )
}

export default Actionbar