import React from "react";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar className="Navbar1" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <h1><Link to="/">FoodLicious</Link></h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            <Nav.Link>
              <h4><Link to="/">Home</Link></h4>
            </Nav.Link>
            <Nav.Link>
              <h4><Link to="/about">About</Link></h4>
            </Nav.Link>
            <Nav.Link>
              <h4><Link to="/jobs">Jobs</Link></h4>
            </Nav.Link>
            <Nav.Link>
              <h4><Link to="/contact">Contact Us</Link></h4>
            </Nav.Link>
            <Nav.Link class="login">
              <h4><Link to="/login">LOGIN</Link></h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
