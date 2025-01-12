import { useContext, useState } from 'react';
import './todoForm.css'
import { TodoContext } from '../TodoContext';

export function TodoForm(){

    const {
        setOpenModal,
        addTodo,

    } = useContext(TodoContext)

    const handleEvent = (e) => {
        e.preventDefault();
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false)
        addTodo(newTodoValue)

    }

    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={(e) => handleEvent(e)}>
            <label>
                Escribe tu nuevo TODO
            </label>
            <textarea
             required
             value={newTodoValue}
             onChange={onChange}
             placeholder="Escribe un TODO"/>

            <div>
                <button onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button onClick={onSubmit} type='submit' className="TodoForm-button TodoForm-button--add">
                    Agregar
                </button>
            </div>
            
            
        </form>
    )
}