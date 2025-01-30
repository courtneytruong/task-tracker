import { useState } from "react";
import { Form, Button, ListGroup, InputGroup } from "react-bootstrap";

//function for form for adding a new task to task list
export default function TaskInput({ addTask }) {
  const [text, setText] = useState("");
  // state management for setting priority
  const [priority, setPriority] = useState("Low");

  //logic for handling changes in text on form
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  //logic for submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text, priority);
    setText("");
  };

  //new task form. submits on pressing enter or by clicking submit button
  return (
    <ListGroup.Item className="taskForm">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          {/* priority selector */}
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
          {/* //submit button */}
          <Button variant="success" onClick={handleSubmit}>
            Add Task
          </Button>
        </InputGroup>
      </form>
    </ListGroup.Item>
  );
}
