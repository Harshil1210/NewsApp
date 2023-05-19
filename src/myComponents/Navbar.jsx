import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import "./News.css"; 
import "bootstrap/dist/css/bootstrap.min.css";


export default class Navbar1 extends Component {
  render() {
    return (
      
      <Navbar  bg="dark" variant="dark" expand="lg" className="sticky-top" >
          
          <Navbar.Brand  as={Link} to="/">News24x7 📰</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/Business">Business</Nav.Link>
              <Nav.Link as={Link} to="/Entertainment">Entertainment</Nav.Link>
              <Nav.Link as={Link} to="/Health">Health</Nav.Link>
              <Nav.Link as={Link} to="/Science">Science</Nav.Link>
              <Nav.Link as={Link} to="/Sports">Sports</Nav.Link>
              <Nav.Link as={Link} to="/Technology">Technology</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
         
      </Navbar>
    );
  }
}
