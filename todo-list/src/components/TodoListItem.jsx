
function TodoListItem({ todo, onDelete }) {

  return (
    <>
      <p>{ todo }</p>
      <button onClick={() => onDelete(todo)}>-</button>
    </>
  );
}

export default TodoListItem;