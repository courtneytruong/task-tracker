import { useState } from "react";
import {
  ListGroup,
  Button,
  ButtonGroup,
  Form,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import "./styles.css";
import EditTaskForm from "./EditTaskForm";

//function for component for individual task to be in a list group with other task components
export default function TaskItem({
  task,
  deleteTask,
  toggleComplete,
  editTask,
}) {
  // state management for edit form visibility
  const [showEditForm, setShowEditForm] = useState(false);

  //toggle edit form visibility when clicking edit button
  const handleEditButtonClick = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <ListGroup.Item className="taskItem" key={task.id}>
      <Container>
        <Row>
          <Col
            md={7}
            className="d-flex justify-content-start align-items-center"
          >
            {/* //toggleable checkbox for item */}
            <Form.Check
              type="checkbox"
              value={task.id}
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            {/*text for item with strikethrough on complete */}
            <span
              className={task.completed ? "completed" : ""}
              style={{ marginLeft: "8px" }}
            >
              {task.text}
            </span>
          </Col>
          {/*button group with edit and delete buttons */}
          <Col md={4} className="d-flex justify-content-end align-items-center">
            <ButtonGroup>
              <Button variant="primary" onClick={handleEditButtonClick}>
                {showEditForm ? "Cancel" : ""} Edit
              </Button>
              <Button variant="danger" onClick={deleteTask}>
                Delete
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        {showEditForm && <EditTaskForm editTask={editTask} task={task} />}
      </Container>
    </ListGroup.Item>
  );
}
