import Home from "./components/Home";
import About from "./components/About";
import TaskTracker from "./components/TaskTracker";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TaskTracker" element={<TaskTracker />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
