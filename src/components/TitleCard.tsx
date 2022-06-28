import { SelectAllRounded } from '@mui/icons-material';
import React from 'react'

interface TitleCardProps {
  title:string;
  //index:number;
  onTitleCard:()=>void;
}

const TitleCard = ({ title,onTitleCard }:TitleCardProps) => {
  let selected:boolean = false;
  return (
    <div className="title-card">
      <button className={selected?"title-card_btn":"penis"} onClick={()=>{onTitleCard();selected=!selected;}}>
      <p>{title}</p>
      </button>
    </div>
  )
}

export default TitleCard