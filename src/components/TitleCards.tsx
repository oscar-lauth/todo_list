import React from 'react'
import TitleCard from './TitleCard';

interface TitleCardsProps {
  todos :{ title:string,content:string }[]
  onTitleCard:(index:number)=>void;
}

const TitleCards = ({ todos,onTitleCard }:TitleCardsProps) => {
  return (
    <div className="title-cards-sidebar">
      {
        todos.map((todo:{ title:string,content:string },index:number)=>
        {return <TitleCard title={todo.title} onTitleCard={()=>onTitleCard(index)} key={index}/>;
        })
      }
    </div>
  )
}

export default TitleCards