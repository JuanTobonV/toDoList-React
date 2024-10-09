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
    text: 'si',
    completed: false,
  }
  
]

function App() {
  return (
    
    <React.Fragment>


      <section className = "toDo__MainContainer">

        <div className = "toDo__card">

        
          <TodoCounter completed={5} total={10}/>


          <TodoSearch>
            <CreateTodoButton/> 
          </TodoSearch> 
          
          <TodoList>
              {defaultTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                />
              ))}
          </TodoList>

    





        </div>


        {/*

        <TodoSearch/>

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
          ))}
        </TodoList>


        <CreateTodoButton/>*/}
      
      </section>


      
      
    </React.Fragment>
  );
}


export default App;

