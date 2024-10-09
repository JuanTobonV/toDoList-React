import './styles/TodoItem.css'
function TodoItem(props) {
    return(
      <li className= "toDo__card--item">

        <span className ="Icon Icon-check Icon-check--active">
          V
        </span>

        <p className = "TodoItem-p TodoItem-p--complete">
          {props.text}
        </p>

        <span className="Icon Icon-delete">
          X
        </span>
      </li>
    );
  }
export {TodoItem}  