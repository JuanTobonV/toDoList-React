import './TodoList.css';

function TodoList(props) {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}


      {props.searchedTodos.map(props.render)}
      <ul className="TodoList">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };

