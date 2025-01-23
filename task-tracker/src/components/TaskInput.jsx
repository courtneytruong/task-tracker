import { useState } from "react";
import {
  Form,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  FormGroup,
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
  };

  //new task form. submits on pressing enter or by clicking submit button
  return (
    <ListGroup.Item className="taskForm">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label>New Task:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add new task text here"
            aria-describedby="Add Task"
            value={text}
            onChange={handleChange}
          />
        </FormGroup>
        <Button variant="success" onClick={handleSubmit}>
          Add Task
        </Button>
      </form>
    </ListGroup.Item>
  );
}
