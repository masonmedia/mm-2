import React from 'react';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import FooterIcon from './FooterIcon';

export default function Footer() {
       
        return (
            <footer>
                <Container fluid className="p-0 relative">
                    <Row className="bg-black text-light p-0">
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <FooterIcon />
                            <h3 className="mb-0">Menu.</h3>
                            <div className="h2 m-0 p-0">--</div>
                            <ul className="list-unstyled blockquote">
                                <Link 
                                cover bg="#014a59"
                                to="/">
                                    <li>Home</li>
                                </Link>
                                <Link 
                                cover
                                to="/about">
                                    <li>About</li>
                                </Link>
                                <Link 
                                cover
                                to="/projects">
                                    <li>Projects</li>
                                </Link>
                                <Link 
                                cover
                                to="/design">
                                    <li>Design</li>
                                </Link>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <FooterIcon />
                            <h3 className="mb-0">Projects.</h3>
                            <div className="h3 m-0">--</div>
                            <ul className="list-unstyled blockquote">
                                <a href="https://oakwoodguitarschool.com/" target="_blank" rel="noreferrer">
                                    <li>OGS</li>
                                </a>
                                <a href="https://neilwhitford.com/" target="_blank" rel="noreferrer">
                                    <li>Neil Whitford</li>
                                </a>
                                <a href="https://warrenyen.com/" target="_blank" rel="noreferrer">
                                    <li>Warren Yen</li>
                                </a>
                                <a href="https://decentral.ca/" target="_blank" rel="noreferrer">
                                    <li>Decentral Inc.</li>
                                </a>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <FooterIcon />
                            <h3 className="mb-0">More.</h3>
                            <div className="h3 m-0">--</div>
                            <ul className="list-unstyled blockquote">
                                <a href="https://github.com/masonmedia" target="_blank" rel="noreferrer"><li>Github</li></a>
                                <a href="https://www.behance.net/andrewmasonmedia" target="_blank" rel="noreferrer"><li>Behance</li></a>
                                <a href="http://copy.andrewmasonmedia.com/" target="_blank" rel="noreferrer"><li>Writing</li></a>
                                <a href="https://soundcloud.com/big-horn-sheep" target="_blank" rel="noreferrer">
                                    <li>Music</li>
                                </a>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <FooterIcon />
                            <h3 className="mb-0">Connect.</h3>
                            <div className="h3 m-0">--</div>
                            <ul className="list-unstyled blockquote">
                                <a href="https://www.linkedin.com/in/andrewmasonmedia/" target="_blank" rel="noreferrer"><li>Linkedin</li></a>
                                <a href="https://www.facebook.com/andrewmasonmedia/" target="blank"><li>Facebook</li></a>
                                <a href="https://twitter.com/C_AndrewMason" target="_blank" rel="noreferrer"><li>Twitter</li></a>
                                <a href="mailto:andrewmasonmedia@gmail.com"><li>Email</li></a>
                            </ul>
                        </Col>
                        <Col sm={12} className="flex-center font-weight-bold pt-4 pb-5">
                        <p id="copyright" className="mb-0">
                            Mason Media | &copy; {new Date().getFullYear()}
                        </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
