import { useState } from "react";
import {
  Form,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";

//function for form for adding a new task to task list
export default function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  //logic for handling changes in text on form
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  //logic for submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  //new task form. submits on pressing enter or by clicking submit button
  return (
    <ListGroup.Item className="taskForm">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text>New Task:</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Add new task text here"
            aria-describedby="Add Task"
            value={text}
            onChange={handleChange}
          />
        </InputGroup>

        <Button variant="success" onClick={handleSubmit}>
          Add Task
        </Button>
      </form>
    </ListGroup.Item>
  );
}
