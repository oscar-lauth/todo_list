import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoCard from './components/TodoCard';
import { TodoCardProps } from './components/TodoCard';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const[title,setTitle] = useState('');
  const[content,setContent] = useState('');
  let todos: { title:string,content:string }[]=[];
  const newTodoCard = ()=>{
    todos.push({ title,content });
    setTitle('');
    setContent('');
    console.log(todos);
  }
  
  return (
    <div className="App">
    <Header/>
    <div className="container">
      <Sidebar onAddTodo={newTodoCard}/>
      <TodoCard title={title} content={content} setTitle={setTitle} setContent={setContent}/>
    </div>
  </div>
  );
}
export default App;

  // //const[currentCard,setCurrentCard] = useState({title:"",content:""});
  // const[todoCards,setTodoCards] = useState([]);
  // // let currentTodoCard: TodoCardProps = {title:"",content:""};
  // const[content,setContent]:[string,any] = useState('');
  // const newTodoCard= ()=>{
  //   setCurrentCard({title:"NEW",content:"NEW"});
  // }


