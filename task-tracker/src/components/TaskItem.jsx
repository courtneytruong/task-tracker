import { useState } from "react";
import { Button, ButtonGroup, Form, Col, Row } from "react-bootstrap";
import "./styles.css";
import EditTaskForm from "./EditTaskForm";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsX } from "react-icons/bs";

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
    <div
      className={task.isOverdue ? "taskItemOverdue" : "taskItem"}
      key={task.id}
    >
      <Row>
        {/* Priority Indicator */}
        <Col xs={2} sm={2} md={1} lg={1} className="taskItemPriority">
          {task.priority}
        </Col>
        {/* //toggleable checkbox for item */}
        <Col xs={10} sm={10} md={3} lg={5} className="taskItemText">
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
        <Col xs={12} sm={12} md={2} lg={2} className="taskItemText">
          <span>Due Date: {task.deadline}</span>
        </Col>
        <Col xs={12} sm={12} md={3} lg={2} className="taskItemText">
          <span>Status: {task.isOverdue ? "Overdue" : "On Time"}</span>
        </Col>
        {/*button group with edit and delete buttons */}
        <Col xs={12} sm={12} md={3} lg={2} className="taskItemButtons">
          <ButtonGroup>
            <Button
              className="custom-edit-button"
              onClick={handleEditButtonClick}
            >
              {showEditForm ? (
                <>
                  <BsX style={{ marginRight: "3px", marginBottom: "3px" }} />
                  Cancel
                </>
              ) : (
                <>
                  <BiSolidEditAlt
                    style={{ marginRight: "3px", marginBottom: "3px" }}
                  />
                  Edit
                </>
              )}
            </Button>
            <Button variant="danger" onClick={deleteTask}>
              <RiDeleteBin2Line
                style={{ marginRight: "3px", marginBottom: "3px" }}
              />{" "}
              Delete
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      {showEditForm && <EditTaskForm editTask={editTask} task={task} />}
    </div>
  );
}
