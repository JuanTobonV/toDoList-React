import React from 'react';
import './styles/TodoSearch.css';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

function TodoSearch({
    searchValue,
    setSearchValue,
    props
    
    }) {

    return (

        <div className="todo__card-searchBardiv">

            <input className="toDo__card--searchBar"
                   placeholder="Add new task" 
                   value={searchValue}
                   onChange={
                   (event) => {
                        
                        setSearchValue(event.target.value);

                    }
                } 
            
            />

            <CreateTodoButton/>

        </div>
    );
}

export { TodoSearch };