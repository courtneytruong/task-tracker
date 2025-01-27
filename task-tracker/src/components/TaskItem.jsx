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

//function for component for individual task to be in a list group with other task components
export default function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <ListGroup.Item className="taskItem" key={task.id}>
      <Container>
        <Row>
          <Col
            md={7}
            className="d-flex justify-content-start align-items-center"
          >
            <Form.Check
              type="checkbox"
              value={task.id}
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span
              className={task.completed ? "completed" : ""}
              style={{ marginLeft: "8px" }}
            >
              {task.text}
            </span>
          </Col>
          <Col md={4} className="d-flex justify-content-end align-items-center">
            <ButtonGroup>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" onClick={deleteTask}>
                Delete
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}

//Todo: toggle complete functionality, edit functionality
