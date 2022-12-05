import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (

        <Navbar bg="info"  variant="dark" expand="lg">
          <Container>
            <Navbar.Brand className='title' as={Link} to="/">E-commerce</Navbar.Brand>
            <Navbar.Toggle className="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Purchases">Purchases</Nav.Link>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                <Nav.Link as={"button"} to="Shopping Cart">Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }


export default NavBar;