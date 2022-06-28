import React from 'react'

interface SidebarHeaderProps {
    onAddTodo:()=>void;
}

const SidebarHeader = ({ onAddTodo }:SidebarHeaderProps) => {
    return (
        <div className="sidebar-header">
            <button className="add-todo_btn material-symbols-outlined" onClick={onAddTodo}>add</button>
        </div>
    )
}

export default SidebarHeader