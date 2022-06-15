import React from 'react'

interface SidebarHeaderProps {
    onAddTodo:()=>void;
}

const SidebarHeader = ({ onAddTodo }:SidebarHeaderProps) => {
    return (
        <div className="sidebar-header">
            <button className="add-todo" onClick={onAddTodo}>Add</button>
        </div>
    )
}

export default SidebarHeader