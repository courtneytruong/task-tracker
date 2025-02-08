import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
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
  const addTask = (taskText, priority, formattedDate) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      priority: priority,
      deadline: formattedDate,
      isOverdue: false,
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
  const editTask = (
    editedTaskText,
    id,
    editedPriority,
    editedFormattedDate
  ) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: editedTaskText,
              priority: editedPriority,
              deadline: editedFormattedDate,
            }
          : task
      )
    );
  };

  //function to check if task is overdue
  const checkIfOverdue = () => {
    const updatedTasks = tasks.map((task) => {
      //get current date and convert deadline string to date object
      const currentDate = new Date();
      const deadlineDate = new Date(task.deadline);
      //compare dates and mark task as overdue
      if (currentDate > deadlineDate) {
        return { ...task, isOverdue: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const initialTasks = savedTasks();
    setTasks(initialTasks);
    checkIfOverdue();
  }, []);

  //filter tasks based on selected priority
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.priority === filter);

  return (
    //task list component div
    <Container>
      <Row>
        <div>
          <TaskInput addTask={addTask} />
          <Filter currentFilter={filter} onFilterChange={setFilter} />
          <Col xs={12} md={12} lg={12}>
            {filteredTasks.map((task) => (
              <TaskItem
                task={task}
                editTask={editTask}
                deleteTask={() => deleteTask(task.id)}
                toggleComplete={toggleComplete}
              />
            ))}
          </Col>
        </div>
      </Row>
    </Container>
  );
}
