import { useState, useEffect } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { RxUpdate } from "react-icons/rx";
import * as Yup from "yup";

export default function EditTaskForm({ editTask, task }) {
  //state for setting edited text
  const [editedText, setEditedText] = useState(task.text);
  //state for setting edited priority
  const [editedPriority, setEditedPriority] = useState(task.priority);
  //state management for setting edited deadline
  const [editedDeadline, setEditedDeadline] = useState("");
  //state management for setting edited formatted date
  const [editedFormattedDate, setEditedFormattedDate] = useState("");
  //state management for validation
  const [editedFormData, setEditedFormData] = useState({ text: "" });
  //state management for form errors
  const [errors, setErrors] = useState({});

  //logic for handling changes in text on edit form
  const handleTaskTextChange = (e) => {
    setEditedText(e.target.value);
  };

  //logic for handling changes in priority in edit form
  const handleTaskPriorityChange = (e) => {
    setEditedPriority(e.target.value);
  };

  //logic for handling changes in deadline in edit form
  const handleTaskDeadlineChange = (e) => {
    setEditedDeadline(e.target.value);
  };

  //parses input date and formats to MM/DD/YYYY, useEffect causes this logic to only run when deadline changes
  useEffect(() => {
    const date = new Date(editedDeadline.split("-").join(", "));
    const formattedDeadline = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    setEditedFormattedDate(formattedDeadline);
  }, [editedDeadline]);

  // useEffect where whenever the text is changed, rerender the form and also setFormData
  useEffect(() => {
    setEditedFormData({
      ...editedFormData,
      editedText: editedText,
      editedDeadline: editedDeadline,
    });
  }, [editedText, editedDeadline]);

  //logic for submitting edit form
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    console.log(isValid);
    if (isValid) {
      editTask(editedText, task.id, editedPriority, editedFormattedDate);
      setEditedText("");
      setEditedPriority("Low");
    }
  };

  //yup validation schema task input form
  const taskInputValidation = Yup.object({
    editedText: Yup.string().required("Text is required."),
    editedDeadline: Yup.date()
      .min(new Date(), "The date cannot be in the past.")
      .required("Deadline is required."),
  });
  //async function for validating form
  const validate = async () => {
    try {
      await taskInputValidation.validate(editedFormData, { abortEarly: false });
      setErrors({});
      console.log("true");
      return true;
    } catch (err) {
      const errorMessages = err.inner.reduce((acc, currErr) => {
        acc[currErr.path] = currErr.message;
        return acc;
      }, {});
      setErrors(errorMessages);
      console.log(errorMessages);
      return false;
    }
  };

  return (
    <Container className="EditTaskForm">
      <Form className="EditTaskForm mt-1 mb-1 mx-2">
        <Row>
          {/* edit text field*/}
          <Col xs={12} md={12} lg={12}>
            <Form.Group as={Row} controlId="editTaskText">
              <Form.Label>Edit Task Text:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type Edits Here"
                aria-describedby="Edit Task"
                value={editedText}
                onChange={handleTaskTextChange}
                isInvalid={!!errors.editedText}
              />
              <Form.Control.Feedback type="Invalid" className="errorMessage">
                {errors.editedText}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          {/*Deadline Input */}
          <Col xs={12} md={6} lg={6} className="mt-1">
            <Form.Group as={Row} controlId="formEditDeadlineSelector">
              <Form.Label> Edit Deadline:</Form.Label>
              <Form.Control
                type="date"
                aria-describedby="Add Deadline"
                value={editedDeadline}
                onChange={handleTaskDeadlineChange}
                isInvalid={!!errors.editedDeadline}
              />
              <Form.Control.Feedback type="Invalid" className="errorMessage">
                {errors.editedDeadline}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          {/* priority selector */}
          <Col xs={12} md={6} lg={6} className="mt-1">
            <Form.Group as={Row} controlId="editPriority">
              <Form.Label>Edit Priority:</Form.Label>
              <Form.Select
                value={editedPriority}
                onChange={handleTaskPriorityChange}
                aria-label="Select Priority"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Form.Group>
            <Button
              className="custom-edit-submit-button"
              onClick={handleEditSubmit}
            >
              <RxUpdate style={{ marginRight: "3px", marginBottom: "3px" }} />
              Update Task
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
}
