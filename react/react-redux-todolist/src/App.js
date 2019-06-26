import React from 'react';
// import logo from './logo.svg';
import TodoList from './todo/TodoList';
import AddTo from './todo/AddTo';
import Filter from "./todo/Filter";
import './App.css';

function App() {
  return (
    <div>
      <AddTo />
      <TodoList />
      <Filter />
    </div>
  );
}

export default App;
