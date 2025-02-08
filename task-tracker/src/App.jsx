import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="body w-100 vh-100">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
