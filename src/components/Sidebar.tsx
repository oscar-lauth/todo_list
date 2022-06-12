import React from 'react'
import TitleCards from './TitleCards'
import SidebarHeader from './SidebarHeader'

// interface SidebarProps {
//   onAddTodo:()=>void;
// }

const Sidebar = ( props: { onAddTodo: ()=>void }) => {
  return (
    <div className="sidebar">
        <SidebarHeader onAddTodo={props.onAddTodo}/>
        <TitleCards/>
    </div>
  )
}

export default Sidebar