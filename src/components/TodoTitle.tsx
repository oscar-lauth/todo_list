import React from 'react'

interface titleProps {
  title:string;
  handleChange:(t:string)=>void;
}

const TodoTitle = ({ title, handleChange }:titleProps) => {
  return (
    <div>
      <input className="title-input"
          value={title}
          onChange={(e)=>{
            e.preventDefault();
            handleChange(e.target.value);}}>
        </input>
      </div>
  )
}

export default TodoTitle