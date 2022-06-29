import { SelectAllRounded } from '@mui/icons-material';

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
    </div>
  )
}

export default TitleCard