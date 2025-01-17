
function TodoListItem({ todo, onDelete }) {

  return (
    <div className="py-3 flex justify-between odd:bg-bright-blue even:bg-soft-blue">
      <p className="ml-11 text-white">{ todo.text }</p>
      <button className="mx-4 px-2 bg-white font-black" onClick={() => onDelete(todo.id)}>-</button>
    </div>
  );
}

export default TodoListItem;