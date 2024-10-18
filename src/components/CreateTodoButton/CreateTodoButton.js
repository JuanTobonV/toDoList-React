import './styles/CreateTodoButton.css';
function CreateTodoButton(){
    return(
        <button className="toDo__searchBar--addButton"
         onClick={
            () => {
                console.log('Le diste click')
                
            }   
        }       
        >    + Add
        </button>
    );
}

export {CreateTodoButton}