import { Container, Col, Row, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="body w-100 vh-100">
      <NavBar />
      <Container className="homeText">
        <Row>
          <Col md={12}>
            <h1>Welcome to Task Tracker!</h1>
          </Col>

          <Col md={12}>
            <h4>The easy to use Task Tracking Application!</h4>
          </Col>

          <Col md={12}>
            <h6>Click the button below to get started:</h6>
            <Link to="/TaskTracker">
              <Button className="custom-submit-button">
                Go to the Task Tracker
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
