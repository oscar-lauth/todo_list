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
    setTodos([...todos,{ title,content }]);

    setTitle('');
    setContent('');
    console.log(todos);
  }
  
  return (
    <div className="App">
    <Header/>
    <div className="container">
      <Sidebar todos={todos} onAddTodo={newTodoCard}/>
      <TodoCard title={title} content={content} setTitle={setTitle} setContent={setContent}/>
    </div>
  </div>
  );
}
export default App;