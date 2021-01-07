import React from 'react'
import { Link, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import { Row, Col, Button } from 'react-bootstrap';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

export default function About() {
    const data = useStaticQuery(
        graphql`
          query aboutQuery {
            imageOne: file(relativePath: { eq: "mm_threed3b.png" }) {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          } 
        `
      )

        return (
            <Layout>
              <Fade bottom>
                <Row className="min-h-100 p-0 m-0 bg-teal">
                  <Img 
                  className="img-full" 
                  style={{position: 'absolute', right: '0', zIndex: '0'}}
                  fluid={data.imageOne.childImageSharp.fluid} alt="" />
                  <Fade left>
                    <div className="absolute top left z-0 h-100 w-100" style={{background: 'rgba(0,0,0,0.2)'}}></div>
                  </Fade>
                  <Col lg={12}
                  className="flex-left p-5">
                    <Fade bottom>
                      <h1 className="site-title text-lowercase mb-0">ab<span className="text-teal text-shadow">out</span></h1>
                    </Fade>
                  </Col>
                </Row>
                </Fade>

                <Fade bottom>
                <Row className="min-h-100 p-0 m-0 bg-dark-teal text-tan">
                    <Col lg={10}
                    className="flex-left p-5">
                      <Fade bottom>
                        <h5 className="font-weight-bold pb-5">intro</h5>
                        <h1 className="section-title font-weight-bold my-auto py-3">I'm a passionate, multidisciplinary designer, developer, and writer. I build websites, design custom imagery, and write copy for a wide variety of contexts. I value ethical design, data privacy, social responsibility, and sustainability.</h1>
                        <h5 className="font-weight-bold pt-5">01</h5>
                        </Fade>
                    </Col>
                </Row>
                </Fade>

                <Fade bottom>
                <Row className="min-h-100 p-0 m-0 text-teal">
                    <Col lg={10}
                    className="flex-left p-5 relative">
                      <Fade bottom>
                      <h5 className="font-weight-bold pb-5">coding + development</h5>
                      <h1 className="section-title font-weight-bold py-3">I build websites from scratch with HTML5, CSS3, SASS, PHP, Javascript, Bootstrap, Tailwind CSS, and Wordpress. I also build single page applications and static websites with React, Next.js, and Gatsby.</h1>
                      <Link to="/projects">
                        <Button variant="outline-dark" className="mt-2 mb-4">See more</Button>
                      </Link>
                      <h5 className="font-weight-bold pt-5">02</h5>
                      </Fade>
                    </Col>
                </Row>
                </Fade>
                
                <Fade bottom>
                <Row className="min-h-100 p-0 m-0 bg-black text-orange">
                    <Col lg={10}
                    className="flex-left p-5">
                      <Fade bottom>
                        <h5 className="font-weight-bold pb-5">web + graphic design</h5>
                        <h1 className="section-title font-weight-bold py-3">I design UIs, imagery and custom assets for websites, social media and print using Photoshop, Canva, Crello, Lunapic and other tools. I make logos, posters, invitations, and source the perfect project-specific photos.</h1>
                        <Link to="/design">
                          <Button variant="outline-light" className="mt-2 mb-4">Learn more</Button>
                        </Link>
                        <h5 className="font-weight-bold pt-5">03</h5>
                        </Fade>
                    </Col>
                </Row>
                </Fade>
                
                <Fade bottom>
                <Row className="min-h-100 p-0 m-0 text-dark-teal">
                    <Col lg={10}
                    className="flex-left p-5">
                      <Fade bottom>
                        <h5 className="font-weight-bold pb-5">copywriting + editing</h5>
                        <h1 className="section-title font-weight-bold py-3">I write and edit copy for a wide variety of contexts. I strive for fast moving, easy-to-read content with humour and originality, while specializing in UX, SEO, and editing for web presentation.</h1>
                        <a href="https://copy.andrewmasonmedia.com" target="_blank" rel="noreferrer">
                          <Button variant="outline-dark" className="mt-2 mb-4">Learn more</Button>
                        </a>
                        <h5 className="font-weight-bold pt-5">04</h5>
                        </Fade>
                    </Col>
                </Row>
                </Fade>
            </Layout>
        )
    }
