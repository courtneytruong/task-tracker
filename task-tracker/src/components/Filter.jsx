import { Form, Container, Row } from "react-bootstrap";
import "./styles.css";

export default function Filter({ currentFilter, onFilterChange }) {
  return (
    <Container className="filter">
      <Form.Group as={Row}>
        <Form.Label>Filter by Priority:</Form.Label>
        <Form.Select
          aria-label="Filter"
          value={currentFilter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option>All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Form.Select>
      </Form.Group>
    </Container>
  );
}
