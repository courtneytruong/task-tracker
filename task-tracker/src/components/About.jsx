import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

export default function About() {
  return (
    <div className="body w-100 vh-100">
      <NavBar />
      <Container>
        <h1>About</h1>
      </Container>
    </div>
  );
}
