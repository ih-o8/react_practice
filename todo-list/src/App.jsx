import { Routes, Route } from "react-router-dom";
import TodoTemplate from "./components/TodoTemplate";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";

function App() {

  return (
    <Routes>
      <Route path="/" element={<TodoTemplate />}/>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostDetail />}></Route>
    </Routes>
  );
}

export default App;