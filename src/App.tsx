import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoCard from './components/TodoCard';
// import { TodoCardProps } from './components/TodoCard';
import { useState } from 'react';

function App() {
  const[title,setTitle] = useState('');
  const[content,setContent] = useState('');
  const[todos,setTodos] = useState<{ title:string,content:string }[]>([]);
  
  const newTodoCard = ()=>{
    if(title==='') return;
    setTodos([...todos,{ title,content }]);
    setTitle('');
    setContent('');
  }

  const selectTitleCard = (index?:number)=>{
    if(index===undefined)return;
    setTitle(todos[index].title);
    setContent(todos[index].content);
    console.log(index);
  }
  
  return (
    <div className="App">
    <Header/>
    <div className="container">
      <Sidebar todos={todos} onAddTodo={newTodoCard} onTitleCard={selectTitleCard}/>
      <TodoCard title={title} content={content} setTitle={setTitle} setContent={setContent}/>
    </div>
  </div>
  );
}
export default App;