import './App.css';
import React from 'react';
import { TodoSearch } from './components/TodoSearch';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const defaultTodos = [
  {
    text: 'Cortar Cebolla',
    completed: false,
  },

  {
    text: 'Completar curso',
    completed: false,
  },

  {
    text: 'Llorar',
    completed: false,
  },

  {
    text: 'Llorar',
    completed: false,
  }
  
]

function App() {
  return (
    
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>

      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem/>
        ))}
      </TodoList>
      

      <CreateTodoButton/>
      
      
    </React.Fragment>
  );
}


export default App;

