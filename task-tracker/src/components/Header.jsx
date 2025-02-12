import { Container } from "react-bootstrap";
import { LuNotebookText } from "react-icons/lu";
import "./styles.css";

export default function Header() {
  return (
    <Container className="header">
      <LuNotebookText
        style={{ fontSize: "40px", marginTop: "5px", marginRight: "5px" }}
      />
      <h1>Task Tracker</h1>
    </Container>
  );
}
