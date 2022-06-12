import React from 'react'
import TitleCards from './TitleCards'
import SidebarHeader from './SidebarHeader'

export interface SidebarProps {
   onAddTodo:()=>void;
}

const Sidebar = ({ onAddTodo }:SidebarProps) => {
  return (
    <div className="sidebar">
        <SidebarHeader onAddTodo={onAddTodo}/>
        <TitleCards/>
    </div>
  )
}

export default Sidebar