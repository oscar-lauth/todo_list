import React from 'react'
import TitleCard from './TitleCard';

interface TitleCardsProps {
  todos :{ title:string,content:string }[]
}

const TitleCards = ({ todos }:TitleCardsProps) => {
  return (
    <div className="title-cards-sidebar">
      <>
      {
        todos.map((todo:{ title:string,content:string })=>{<TitleCard title={todo.title}/>;
        {console.log(todo.title)}})

      }
      </>
    </div>
  )
}

export default TitleCards