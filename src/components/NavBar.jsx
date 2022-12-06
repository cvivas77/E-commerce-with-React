import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Card from './Card';

const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Navbar bg="info"  variant="dark" expand="lg">
          <Container>
            <Navbar.Brand className='title' as={Link} to="/">E-commerce</Navbar.Brand>
            <Navbar.Toggle className="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Purchases">Your Account</Nav.Link>
                <Nav.Link as={Link} to="/Login">
                  <img className='img-login' src="src/fonts/login.png" alt="" />
                </Nav.Link>
                <Nav.Link onClick={handleShow}>
                  <img className='img-car' src="src/fonts/7031787.png" alt="" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Card show={show} handleClose={handleClose} />
    </>
      );
    }


export default NavBar;