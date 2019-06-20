import React from 'react';
import './App.css';
import TodoForm from './container/TodoForm';
import TodoList from './container/TodoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
