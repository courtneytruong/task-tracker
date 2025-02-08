import { useState, useEffect } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import "./styles.css";

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
    <Container className="addTaskForm">
      <Form className="mt-1 mb-1 mx-2">
        <Row>
          {/* //new task text input */}
          <Col xs={12} md={12} lg={12}>
            <Form.Group as={Row} controlId="formNewTask">
              <Form.Label>New Task:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add new task text here"
                aria-describedby="Add Task"
                value={text}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          {/*Deadline Input */}
          <Col xs={12} md={6} lg={6} className="mt-1">
            <Form.Group as={Row} controlId="formDeadlineSelector">
              <Form.Label>Deadline:</Form.Label>
              <Form.Control
                type="date"
                aria-describedby="Add Deadline"
                value={deadline}
                onChange={handleDateChange}
              />
            </Form.Group>
          </Col>
          {/* priority selector */}
          <Col xs={12} md={6} lg={6} className="mt-1">
            <Form.Group as={Row} controlId="formPrioritySelector">
              <Form.Label>Priority:</Form.Label>
              <Form.Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                aria-label="Select Priority"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Button onClick={handleSubmit} className="custom-submit-button">
            <BsPlusCircle style={{ marginRight: "3px", marginBottom: "3px" }} />
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
