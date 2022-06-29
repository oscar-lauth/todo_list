import React from 'react'
import TitleCard from './TitleCard';
import { useState } from 'react';

interface TitleCardsProps {
  todos :{ title:string,content:string }[]
  onTitleCard:(index:number)=>void;
}

const TitleCards = ({ todos,onTitleCard }:TitleCardsProps) => {
  const [selectedIndex,setSelectedIndex] = useState(-1);
  return (
    <div className="title-cards-sidebar">
      {
        todos.map((todo:{ title:string,content:string },index:number)=>
        {return <TitleCard title={todo.title} onTitleCard={()=>{onTitleCard(index);setSelectedIndex(index)}} isSelected={selectedIndex===index} key={index}/>;
        })
      }
    </div>
  )
}

export default TitleCards