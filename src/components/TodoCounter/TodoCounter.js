import './styles/TodoCounter.css'

function TodoCounter({total, completed}) {
    return(

        <>
          <h1 className="toDo_Title">
            Hello Juan! 👋
          </h1>
          
          <h1>
            
            Has completado {completed} de {total} To Do's
          </h1>
        </>
    );
}

export {TodoCounter};