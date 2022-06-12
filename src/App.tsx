import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoCard from './components/TodoCard';
import { TodoCardProps } from './components/TodoCard';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const[currentCard,setCurrentCard] = useState({title:"",content:""});
  const[todoCards,setTodoCards] = useState([]);
  // let currentTodoCard: TodoCardProps = {title:"",content:""};
  const newTodoCard= ()=>{
    setCurrentCard({title:"NEW",content:"NEW"});
  }
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Sidebar onAddTodo={newTodoCard}/>
        <TodoCard {...currentCard}/>
      </div>
    </div>
  );
}

export default App;
