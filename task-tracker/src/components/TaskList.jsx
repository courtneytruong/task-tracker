import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TaskItem from "./TaskItem";
import Filter from "./Filter";
import "./styles.css";
import TaskInput from "./TaskInput";

//logic for loading tasks from local storage when the app starts
const savedTasks = () => {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (!data) return [];
  return data;
};

//function for rendering a complete task list component
export default function TaskList() {
  //state management for setting tasks
  const [tasks, setTasks] = useState(savedTasks);
  //state management for filtering tasks
  const [filter, setFilter] = useState("All");

  //adds task to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //function for adding new task
  const addTask = (taskText, priority) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      priority: priority,
    };
    setTasks([...tasks, newTask]);
  };

  //function for toggling completed
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //function for deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //function for editing a task
  const editTask = (editedTaskText, id, editedPriority) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: editedTaskText, priority: editedPriority }
          : task
      )
    );
  };

  //filter tasks based on selected priority
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.priority === filter);

  return (
    //task list component div
    <div>
      <ListGroup className="list">
        <TaskInput addTask={addTask} />
        <Filter currentFilter={filter} onFilterChange={setFilter} />
        {filteredTasks.map((task) => (
          <TaskItem
            task={task}
            editTask={editTask}
            deleteTask={() => deleteTask(task.id)}
            toggleComplete={toggleComplete}
          />
        ))}
      </ListGroup>
    </div>
  );
}
