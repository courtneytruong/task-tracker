import React, { useState } from "react";
import { Navbar, Nav, Collapse, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuNotebookText } from "react-icons/lu";
import "./styles.css";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false); // for handling collapse state
  return (
    <Navbar className="navbar" expand="sm" expanded={expanded}>
      <Navbar.Brand href="#home">
        <LuNotebookText style={{ marginRight: "3px", marginBottom: "3px" }} />
        Task Tracker
      </Navbar.Brand>
      <Button
        onClick={() => setExpanded(!expanded)}
        aria-controls="navbar-nav"
        aria-expanded={expanded}
        className="btn navbarCollapseButton d-sm-none" // Only shows on smaller screens
      >
        <GiHamburgerMenu />
      </Button>
      <Collapse in={expanded}>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/TaskTracker">Task Tracker</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Collapse>
    </Navbar>
  );
}
