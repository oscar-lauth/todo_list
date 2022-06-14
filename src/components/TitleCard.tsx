import React from 'react'

interface TitleCardProps {
  title:string;
  //index:number;
  onTitleCard:()=>void;
}

const TitleCard = ({ title,onTitleCard }:TitleCardProps) => {
  return (
    <div className="title-card">
      <button onClick={()=>onTitleCard()}>
      <h3>{title}</h3>
      </button>
    </div>
  )
}

export default TitleCard