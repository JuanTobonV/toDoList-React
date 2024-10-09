import './styles/TodoSearch.css';

function TodoSearch(props) {
    return (
        <div className="todo__card-searchBardiv">

            <input className="toDo__card--searchBar" type="text" placeholder="Add new task" />

            {props.children}

            {/*<p className="toDo__searchBar--addButton">
                + Add
            </p>*/}
        </div>
    );
}

export { TodoSearch };