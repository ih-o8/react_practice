import { useState } from 'react';

function TodoInsert({ addTodo }) {
  const [todo, setTodo] = useState("");

  // 입력값 변경 시 상태 업데이트
  function onChange(event) {
    setTodo(event.target.value);
  }

  // todo 추가 & 입력창창 초기화
  function onSubmit(event) {
    event.preventDefault();
    if ( todo === "" ){
      return;
    }
    addTodo(todo);
    setTodo("");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input className="py-3 pl-11 pr-20 bg-pure-blue text-dark-gray placeholder:text-dark-gray placeholder:text-left" onChange={onChange} value={todo} type="text" placeholder="내용을 입력해주세요"/>
        <button className="px-5 py-3 text-left bg-somber-blue text-white font-black">+</button>
      </form>
    </>
  );
}

export default TodoInsert;