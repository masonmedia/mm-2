import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/Layout';
import { Row, Col, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

export default function ErrorPage() {
    return (
        <Layout>
            <Fade bottom>
                <Row className="min-h-100 p-0 m-0 relative bg-knockout">
                    <Col sm={12} lg={12}
                    className="flex-center p-5">
                        <Fade top>
                        <h1 className="site-title knockout text-lowercase text-shadow">404!</h1>
                        </Fade>
                        <Fade bottom>
                        <p className="h3 text-light text-shadow" style={{lineHeight: '80%'}}>Oops, there was a problem.</p>
                        <Link to="/">
                            <Button variant="outline-light" className="bg-tan shadow mt-3">Return home</Button>
                        </Link>
                        </Fade>
                    </Col>
                </Row>
            </Fade>
        </Layout>
    )
}
