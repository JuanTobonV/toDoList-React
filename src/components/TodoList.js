import './styles/TodoList.css'

function TodoList({children}){
    return(
        <ul className="toDo__card--list">
            {children}
        </ul>
    );
}

export {TodoList}