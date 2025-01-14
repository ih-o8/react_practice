import TodoTemplate from "./components/TodoTemplate";
import Posts from "./components/Posts";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<TodoTemplate />}/>
      <Route path="/posts" element={<Posts />}></Route>
    </Routes>
  );
}

export default App;