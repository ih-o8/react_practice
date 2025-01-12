import TodoListItem from "./TodoListItem";

function TodoList({ todos, removeTodo }) {

  return (
    <>
      {todos.map((todo, index) => (
        <TodoListItem key={ index } todo={ todo } onDelete={removeTodo}/>
      ))}
    </>
  );
}

export default TodoList;