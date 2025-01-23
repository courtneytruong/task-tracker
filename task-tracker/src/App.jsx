import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}

export default App;
