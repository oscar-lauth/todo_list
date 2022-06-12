import { BADHINTS } from 'dns'
import React from 'react'

interface SidebarHeaderProps {
    onAddTodo:()=>void;
}

const SidebarHeader = (props:SidebarHeaderProps) => {
    return (
        <div className="sidebar-header">
            <button onClick={props.onAddTodo}>Add</button>
            <button>Done</button>
        </div>
    )
}

export default SidebarHeader