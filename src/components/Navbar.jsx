import logo from '../images/NavBar.png'
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function NavBar() {
  return (
    <Navbar className='navBar sticky-top pos' expand="lg">
      <Container >
        <Navbar.Brand href="/" className = "logo">Field Day Florals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">    
          <Nav>
            <Link to="about" className = "NavBarLink">About</Link>
            <Link to="services" className = "NavBarLink">Services</Link>
            <Link to="contact" className = "NavBarLink">Contact</Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}



