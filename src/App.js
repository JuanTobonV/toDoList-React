import React from 'react';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { useLocalStorage } from './components/Hooks/useLocalStorage';

// const defaultTodos = [
//   {
//     text: 'Cortar Cebolla',
//     completed: true,
//   },

//   {
//     text: 'Completar curso',
//     completed: false,
//   },

//   {
//     text: 'Llorar',
//     completed: true,
//   },

//   {
//     text: 'si',
//     completed: false,
//   },

//   {
//     text: 'LALALALALA',
//     completed: true,
//   }
  
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

// localStorage.removeItem('TODOS_V1')


function App() {

  //Estados de react 

  const [todos,saveTodos] = useLocalStorage('TODOS_V1', []); //Estado que recibe un array con los distintos objetos ToDo's y servirá para contarlos

  const [searchValue, setSearchValue] = React.useState(''); //Estado que inicialmente es un string vacio y que recibirá
                                                            //los values que los users escriban en el input

  const completedTodos = todos.filter(todo => !!todo.completed).length; //Estado derivado, ayuda a calcular la cantidad de todos en el array de todosDefaut

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {

      const todoText = todo.text.toLowerCase();

      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }

  );

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(
      (todo) => todo.text === text);
    
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }; 

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }; 

  // ////////////////////////////////////////////////////////////////// 



  //En este return, vamos a llamar y renderizar a todos nuestros componentes y escribir código JSX.

  return (
    
    <React.Fragment>


      <section className = "toDo__MainContainer">

        <div className = "toDo__card">

        
          <TodoCounter completed={completedTodos} total={totalTodos}/>


          <TodoSearch searchValue ={searchValue} setSearchValue ={setSearchValue}/>
            
          
          <TodoList>
              {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}

                />
              ))}
          </TodoList>

    





        </div>

      </section>


      
      
    </React.Fragment>
  );
}


export default App;

