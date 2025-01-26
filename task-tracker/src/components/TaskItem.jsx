import { ListGroup, Button, ButtonGroup } from "react-bootstrap";
import "./styles.css";

//function for component for individual task to be in a list group with other task components
export default function TaskItem({ task, deleteTask }) {
  return (
    <ListGroup.Item key={task.id}>
      <div className="d-flex justify-content-between align-items-center">
        <span>{task.text}</span>
        <ButtonGroup>
          <Button variant="primary">Edit</Button>
          <Button variant="danger" onClick={deleteTask}>
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </ListGroup.Item>
  );
}
