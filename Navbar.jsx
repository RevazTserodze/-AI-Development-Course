import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; 

function MyNavbar({ id }) {
  return (
    <Navbar id={id} bg="primary" variant="dark" expand="lg" className="sticky-top">
      <Navbar.Brand style={{ marginLeft: '10px' }} href="#">
        <img className="img-fluid" width='55px' src='https://cdn-icons-png.flaticon.com/128/9626/9626678.png' alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle style={{ marginRight: '10px' }} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{ justifyContent: 'space-between' }} id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="ml-auto" style={{ marginLeft: '10px' }}>
          <Nav.Link style={{ color: 'white' }} href="#reviews">Reviews</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#about">About Us</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;