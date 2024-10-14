import './styles/TodoItem.css'

import {CompleteIcon} from './CompleteIcon.js'

import {DeleteIcon} from './DeleteIcon.js'

function TodoItem(props) {

    // Este archivo define el componente TodoItem, que representa un elemento de la lista de tareas.
    // pasamos por medio de las props, las propiedades completed, onComplete y onDeletes(Estas dos últimas
    // propiedades tiene funcionalidad gracias a los estados completeTodo y deleteTodo que definimos
    // en app.js)
    //  

    return(
      <li className= "toDo__card--item">

        <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>

        <p className = {`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>

        <DeleteIcon completed={props.completed} onDelete={props.onDelete}/>

      </li>
    );
  }
export {TodoItem}  