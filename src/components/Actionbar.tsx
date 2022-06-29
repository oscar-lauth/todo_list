import React from 'react'

interface ActionbarProps {
    onAddTodo:()=>void;
    onSaveTodo:()=>void;

}

const Actionbar = ({ onAddTodo,onSaveTodo }:ActionbarProps) => {
  return (
    <div className="actionbar">
        <button className="add-todo_btn material-symbols-outlined" onClick={onAddTodo}>add</button>
        <button className="save-todo_btn material-symbols-outlined" onClick={onSaveTodo}>done</button>
    </div>
  )
}

export default Actionbar