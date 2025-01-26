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
export default function TaskItem({ task, deleteTask }) {
  return (
    <ListGroup.Item className="taskItem" key={task.id}>
      <Container>
        <Row>
          <Col
            md={7}
            className="d-flex justify-content-start align-items-center"
          >
            <Form.Check type="checkbox" label={task.text} />
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
