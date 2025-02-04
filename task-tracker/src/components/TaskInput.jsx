import { useState, useEffect } from "react";
import { Form, Button, ListGroup, InputGroup } from "react-bootstrap";

//function for form for adding a new task to task list
export default function TaskInput({ addTask }) {
  const [text, setText] = useState("");
  // state management for setting priority
  const [priority, setPriority] = useState("Low");
  //state management for setting deadline
  const [deadline, setDeadline] = useState("");
  //state management for setting formatted date
  const [formattedDate, setFormattedDate] = useState("");

  //logic for handling changes in text on form
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  //logic for handling changes in date form
  const handleDateChange = (e) => {
    setDeadline(e.target.value);
  };

  //parses input date and formats to MM/DD/YYYY, useEffect causes this logic to only run when deadline changes
  useEffect(() => {
    const date = new Date(deadline.split("-").join(", "));
    const formattedDeadline = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    setFormattedDate(formattedDeadline);
  }, [deadline]);

  //logic for submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text, priority, formattedDate);
    setText("");
  };

  //new task form. submits on pressing enter or by clicking submit button
  return (
    <ListGroup.Item className="taskForm">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          {/* priority selector */}
          <InputGroup.Text>Priority:</InputGroup.Text>
          <Form.Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            aria-label="Select Priority"
          >
            <option>Open this select menu</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
          {/* //new task text input */}
          <InputGroup.Text>New Task:</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Add new task text here"
            aria-describedby="Add Task"
            value={text}
            onChange={handleChange}
          />
          {/*Deadline Input */}
          <InputGroup.Text>Deadline:</InputGroup.Text>
          <Form.Control
            type="date"
            aria-describedby="Add Deadline"
            value={deadline}
            onChange={handleDateChange}
          />
          {/* //submit button */}
          <Button variant="success" onClick={handleSubmit}>
            Add Task
          </Button>
        </InputGroup>
      </form>
    </ListGroup.Item>
  );
}
