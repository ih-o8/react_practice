import { useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function TodoTemplate() {
  const [todos, setTodos] = useState([]);

  // todos에 todo 추가
  function addTodo(newTodo) {
    const newTodoItem = {
      id: Date.now(),  // 고유한 ID 생성
      text: newTodo
    };
    setTodos((prev) => [...prev, newTodoItem]);
  };

  // todos에서 todo 삭제
  function removeTodo(deleteId) {
    setTodos(todos.filter(todo => todo.id !== deleteId));
  }

  return (
    <div className="py-1 rounded-2xl bg-dark-blue">
      <h1 className="my-5 text-center text-white tracking-widest text-2xl font-black">Todo-List</h1>
      <TodoInsert addTodo={ addTodo }/>
      <TodoList todos={ todos } removeTodo={ removeTodo }/>
      <p className="my-5 text-center text-white">현재 해야 할 일이 { todos.length }개 남아있습니다.</p>
    </div>
  );
}

export default TodoTemplate;