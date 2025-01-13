import TodoListItem from "./TodoListItem";

function TodoList({ todos, removeTodo }) {

  return (
    <>
      {todos.map((todo) => (
        <TodoListItem key={ todo.id } todo={ todo } onDelete={ removeTodo }/>
      ))}
    </>
  );
}

export default TodoList;