import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TaskItem from "./TaskItem";
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
  const [tasks, setTasks] = useState(savedTasks);

  //adds task to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //function for adding new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
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

  // function for editing a task
  // const editTask = (edittedTask, editedTaskText) => {
  //   console.log(editedTaskText);
  //   console.log(edittedTask);
  //   // setTasks(
  //   //   tasks.map((task) => (task.id === id ? { ...task, text: text } : task))
  //   // );
  // };

  return (
    //task list component div
    <div>
      <ListGroup className="list">
        <TaskInput addTask={addTask} />
        {tasks.map((task) => (
          <TaskItem
            task={task}
            deleteTask={() => deleteTask(task.id)}
            // editTask={() => editTask()}
            toggleComplete={toggleComplete}
          />
        ))}
      </ListGroup>
    </div>
  );
}
