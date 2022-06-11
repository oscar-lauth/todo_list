import React from 'react'

const Header = () => {
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  const dayOfWeek = weekdays[d.getDay()];
  const month = months[d.getMonth()];
  const day = d.getDate();
  return (
    <div className="header">
      <h3 className="date-invis">{dayOfWeek}, {month} {day}</h3>
      <h1 className="title-name">Oscar's Todos</h1>
      <h3 className="date">{dayOfWeek}, {month} {day}</h3>
    </div>
  )
}

export default Header