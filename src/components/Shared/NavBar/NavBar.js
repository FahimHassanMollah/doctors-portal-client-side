import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div >
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home" style={{ visibility: "hidden" }}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <Link className={`btn mr-4 ${window.location.pathname==='/appoinment'?'text-secondary':'text-white'}`} to={'/home'}>Home</Link>
                            <Link className={`btn mr-4 ${window.location.pathname==='/appoinment'?'text-secondary':'text-white'}`} to={'/dentalServices'}>Dental Services</Link>
                            <Link className={`btn mr-4 ${window.location.pathname==='/appoinment'?'text-secondary':'text-white'}`} to={'/about'}>About</Link>
                            <Link className={`btn mr-4 ${window.location.pathname==='/appoinment'?'text-secondary':'text-white'}`} to={'/blog'}>Blog</Link>
                            <Link className={`btn mr-4 ${window.location.pathname==='/appoinment'?'text-secondary':'text-white'}`} to={'/reviews'}>Reviews</Link>
                            <Link className={`btn mr-4 ${window.location.pathname==='/appoinment'?'text-secondary':'text-white'}`} to={'/contactUs'}>Contact Us</Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;