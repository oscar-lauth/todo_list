import React from 'react'
import { SidebarProps } from './Sidebar'

const SidebarHeader = ({ onAddTodo }:SidebarProps) => {
    return (
        <div className="sidebar-header">
            <button onClick={onAddTodo}>Add</button>
            <button>Done</button>
        </div>
    )
}

export default SidebarHeader