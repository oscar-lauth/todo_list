import React from 'react'
import TitleCards from './TitleCards'
import SidebarHeader from './SidebarHeader'

interface SidebarProps {
  todos:{ title:string,content:string }[];
   onTitleCard:()=>void;
}

const Sidebar = ({ todos,onTitleCard }:SidebarProps) => {
  return (
    <div className="sidebar">
        <SidebarHeader/>
        <TitleCards todos={todos} onTitleCard={onTitleCard}/>
    </div>
  )
}

export default Sidebar