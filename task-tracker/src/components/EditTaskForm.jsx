import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

export default function EditTaskForm({ editTask, task }) {
  const [editedText, setEditedText] = useState("");

  //logic for handling changes in text on edit form
  const handleTaskTextChange = (e) => {
    setEditedText(e.target.value);
  };

  //logic for submitting edit form
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(editedText, task.id);
    setEditedText("");
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <InputGroup>
        <InputGroup.Text>Task:</InputGroup.Text>
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
