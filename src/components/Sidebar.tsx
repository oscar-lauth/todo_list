import React from 'react'
import TitleCards from './TitleCards'
import SidebarHeader from './SidebarHeader'

interface SidebarProps {
  todos:{ title:string,content:string }[];
   onAddTodo:()=>void;
   onTitleCard:()=>void;
}

const Sidebar = ({ todos,onAddTodo,onTitleCard }:SidebarProps) => {
  return (
    <div className="sidebar">
        <SidebarHeader onAddTodo={onAddTodo}/>
        <TitleCards todos={todos} onTitleCard={onTitleCard}/>
    </div>
  )
}

export default Sidebar