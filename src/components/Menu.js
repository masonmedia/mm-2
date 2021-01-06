import React from 'react';
import { Link } from "gatsby";
import { Navbar, Nav, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Menu = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="xl" bg="dark-teal" variant="dark" className="fade-down shadow py-3">
            <Link 
            className="navbar-brand" 
            to="/"
            activeClassName="active">mason<span className="font-weight-bold">media</span>
            </Link>
            <Navbar.Toggle className="border-0 outline-0" aria-controls="responsive-navbar-nav">
                <span className="icon-bar top-bar"></span>
	            <span className="icon-bar middle-bar"></span>
	            <span className="icon-bar bottom-bar"></span>

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#000000" className="bi bi-filter-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
            </svg> */}
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex">
                    <Link className="nav-link" to="/about">about</Link>
                    <Link className="nav-link" to="/projects">projects</Link>
                    <Link className="nav-link" to="/design">design</Link>
                    <a className="nav-link" href="mailto:andrewmasonmedia@gmail.com">
                        <Button variant="outline-light">Contact</Button>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
