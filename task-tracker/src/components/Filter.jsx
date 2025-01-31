import { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import TaskList from "./TaskList";

export default function Filter({ currentFilter, onFilterChange }) {
  return (
    <div className="filter">
      <InputGroup>
        <InputGroup.Text>Filter by Priority:</InputGroup.Text>
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
      </InputGroup>
    </div>
  );
}
