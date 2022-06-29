import React from 'react'

interface TitleCardProps {
  title:string;
  isSelected:boolean;
  onTitleCard:()=>void;
  // selected:boolean;
}
const TitleCard = ({ title,isSelected,onTitleCard }:TitleCardProps) => {
  return (
    <div className="title-card">
      <button className={"title-card_btn"+(isSelected?" is-selected":"")}
      onClick={(e)=>{
        onTitleCard();
        }}>
      <p>{title}</p>
      </button>
      <div className={"select-tab"+(isSelected?" is-selected":"")}></div>
    </div>
  )
}

export default TitleCard