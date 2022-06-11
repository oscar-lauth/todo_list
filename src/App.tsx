import React from 'react';
import Header from './components/Header';
import TitleCards from './components/TitleCards';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <TitleCards/>
        <TodoCard/>
      </div>
    </div>
  );
}

export default App;
