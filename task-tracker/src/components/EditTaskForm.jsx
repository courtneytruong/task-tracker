import { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { RxUpdate } from "react-icons/rx";

export default function EditTaskForm({ editTask, task }) {
  //state for setting edited text
  const [editedText, setEditedText] = useState(task.text);
  //state for setting edited priority
  const [editedPriority, setEditedPriority] = useState(task.priority);

  //logic for handling changes in text on edit form
  const handleTaskTextChange = (e) => {
    setEditedText(e.target.value);
  };

  //logic for handling changes in priority in edit form
  const handleTaskPriorityChange = (e) => {
    setEditedPriority(e.target.value);
  };

  //logic for submitting edit form
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(editedText, task.id, editedPriority);
    setEditedText("");
    setEditedPriority("Low");
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
              />
            </Form.Group>
          </Col>
          {/*Deadline Input */}
          <Col xs={12} md={6} lg={6} className="mt-1">
            <Form.Group as={Row} controlId="formEditDeadlineSelector">
              <Form.Label> Edit Deadline:</Form.Label>
              <Form.Control
                type="date"
                aria-describedby="Add Deadline"
                value={""}
                onChange={""}
              />
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
