import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

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
    <form onSubmit={handleEditSubmit}>
      <InputGroup>
        <InputGroup.Text>Task:</InputGroup.Text>
        {/* priority selector */}
        <Form.Select
          value={editedPriority}
          onChange={handleTaskPriorityChange}
          aria-label="Select Priority"
        >
          <option>Open this select menu</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Form.Select>
        <Form.Control
          type="text"
          placeholder="Type Edits Here"
          aria-describedby="Edit Task"
          value={editedText}
          onChange={handleTaskTextChange}
        />
        <Button variant="success" onClick={handleEditSubmit}>
          Save Edits
        </Button>
      </InputGroup>
    </form>
  );
}
