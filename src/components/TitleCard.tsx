import React from 'react'

const TitleCard = ({ title }:{ title:string }) => {
  return (
    <div className="title-card">
      <h3>{title}</h3>
    </div>
  )
}

export default TitleCard