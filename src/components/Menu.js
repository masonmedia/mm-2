import React from 'react';
import { Link } from "gatsby";
import { Navbar, Nav, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Menu = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="xl" bg="dark-teal" variant="dark" className="fade-down shadow py-3">
            <Link 
            className="navbar-brand font-900" 
            to="/"
            activeClassName="active">
                {/* <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tallymark-3" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="8" y1="5" x2="8" y2="19" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="16" y1="5" x2="16" y2="19" />
                    </svg>
                </span> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-tan bi bi-grid-1x2 mr-2" viewBox="0 0 16 16" style={{transform: 'rotate(90deg)'}}>
                <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/>
                </svg>
                mason<span className="text-tan">media</span>
            </Link>
            <Navbar.Toggle className="border-0 outline-0 pt-0" aria-controls="responsive-navbar-nav">
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
