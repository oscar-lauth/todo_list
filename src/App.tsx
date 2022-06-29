import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoCard from './components/TodoCard';
import { useState } from 'react';
import Actionbar from './components/Actionbar';

function App() {
  const[title,setTitle] = useState('');
  const[content,setContent] = useState('');
  const[todos,setTodos] = useState<{ title:string,content:string }[]>([]);
  const[index,setIndex] = useState(-1);
  
const isValidTitle:()=>boolean = ()=>{ 
  //return true only if title is non-empty and unique
  setTitle('');
  setContent('');
  if(title==='') return false;
  //check not just unique title, but if title diff but UID already in array then we want to not clone a new card
  return !todos.some(td=>td.title===title);
}

  const newTodoCard = ()=>{
    if(!isValidTitle()) return; //exit if invalid title
    setTodos([...todos,{ title,content }]);
    setTitle('');
    setContent('');
  }

  const saveTodo = ()=>{
    setTodos(todos.map((todo:{ title:string,content:string },i:number)=>{
      if(index===i)
        return {title: title, content: content};
      else
        return todo;
    }));
  }

  const selectTitleCard = (index?:number)=>{
    if(index===undefined || title===todos[index].title)
      return;
    
    setTitle(todos[index].title);
    setContent(todos[index].content);
    setIndex(index);
  }
  
  return (
    <div className="App">
    {/* <Header/> */}
    <div className="container">
      <Sidebar todos={todos} onTitleCard={selectTitleCard}/>
      {/* <div className="vertical-bar"></div> */}
      <TodoCard title={title} content={content} setTitle={setTitle} setContent={setContent}/>
      <Actionbar onAddTodo={newTodoCard} onSaveTodo={saveTodo}/>
    </div>
  </div>
  );
}
export default App;