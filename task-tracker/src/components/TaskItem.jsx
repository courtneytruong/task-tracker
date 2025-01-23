import ListGroup from "react-bootstrap/ListGroup";

//function for component for individual task to be in a list group with other task components
export default function TaskItem({ task }) {
  return (
    <ListGroup.Item className="taskItem" key={task.id}>
      {task.text}
    </ListGroup.Item>
  );
}
