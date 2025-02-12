import { useState, useEffect } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import "./styles.css";
import * as Yup from "yup";

//function for form for adding a new task to task list
export default function TaskInput({ addTask }) {
  const [text, setText] = useState("");
  // state management for setting priority
  const [priority, setPriority] = useState("Low");
  //state management for setting deadline
  const [deadline, setDeadline] = useState("");
  //state management for setting formatted date
  const [formattedDate, setFormattedDate] = useState("");
  //state management for validation
  const [formData, setFormData] = useState({ text: "" });
  //state management for form errors
  const [errors, setErrors] = useState({});

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

  // useEffect where whenever the text is changed, rerender the form and also setFormData
  useEffect(() => {
    setFormData({ ...formData, text: text, deadline: deadline });
  }, [text, deadline]);

  //logic for submitting form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      addTask(text, priority, formattedDate);
      setText("");
    }
  };

  //yup validation schema task input form
  const taskInputValidation = Yup.object({
    text: Yup.string().required("Text is required."),
    deadline: Yup.date()
      .min(new Date(), "The date cannot be in the past.")
      .required("Deadline is required."),
  });
  //async function for validating form
  const validate = async () => {
    try {
      await taskInputValidation.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("true");
      return true;
    } catch (err) {
      const errorMessages = err.inner.reduce((acc, currErr) => {
        acc[currErr.path] = currErr.message;
        return acc;
      }, {});
      setErrors(errorMessages);
      return false;
    }
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
                isInvalid={!!errors.text}
              />
              <Form.Control.Feedback type="Invalid" className="errorMessage">
                {errors.text}
              </Form.Control.Feedback>
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
                isInvalid={!!errors.deadline}
              />
              <Form.Control.Feedback type="Invalid" className="errorMessage">
                {errors.deadline}
              </Form.Control.Feedback>
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
