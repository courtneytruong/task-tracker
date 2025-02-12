import Header from "./Header";
import TaskList from "./TaskList";
import NavBar from "./NavBar";

export default function TaskTracker() {
  return (
    <div className="body w-100 vh-100">
      <NavBar />
      <Header />
      <TaskList />
    </div>
  );
}
