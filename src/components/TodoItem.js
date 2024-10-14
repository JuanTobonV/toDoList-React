import './styles/TodoItem.css'

import {CompleteIcon} from './CompleteIcon.js'

import {DeleteIcon} from './DeleteIcon.js'

function TodoItem(props) {
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