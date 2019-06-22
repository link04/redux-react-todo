import React from 'react';
import './App.css';
import TodoForm from './container/TodoForm';
import TodoList from './container/TodoList';
import FilterLinks from './container/FilterLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <TodoList />
        <FilterLinks />
      </header>
    </div>
  );
}

export default App;
