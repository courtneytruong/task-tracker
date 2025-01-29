import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

export default function EditTaskForm({ task }) {
  const [editedTaskText, setEditedTaskText] = useState("");

  //logic for handling changes in text on edit form
  const handleTaskTextChange = (evt) => {
    setEditedTaskText(evt.target.value);
  };

  //logic for submitting edit form
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask();
    setEditedTaskText("");
  };

  const editTask = () => {
    console.log("ashdlkasndla");
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <InputGroup>
        <InputGroup.Text>Task:</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Type Edits Here"
          aria-describedby="Edit Task"
          value={editedTaskText}
          onChange={handleTaskTextChange}
        />
        <Button variant="success" onClick={handleEditSubmit}>
          Save Edits
        </Button>
      </InputGroup>
    </form>
  );
}
