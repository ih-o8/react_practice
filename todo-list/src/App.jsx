import TodoTemplate from "./components/TodoTemplate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoTemplate />}/>
      </Routes>
    </Router>
  );
}

export default App;
