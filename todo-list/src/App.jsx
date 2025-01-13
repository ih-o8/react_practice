import TodoTemplate from "./components/TodoTemplate";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoTemplate />}/>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
