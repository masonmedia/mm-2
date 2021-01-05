import React from 'react'
import { Link, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import { Row, Col, Button } from 'react-bootstrap';
import Img from 'gatsby-image';

export default function About() {
    const data = useStaticQuery(
        graphql`
          query aboutQuery {
            imageOne: file(relativePath: { eq: "mm_laptops2.png" }) {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageTwo: file(relativePath: { eq: "mm_ui_mock3.png" }) {
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
                <Row className="min-h-100 p-0 m-0">
                  <Img 
                  className="img-full" 
                  durationFadeIn={1500}
                  placeholderStyle={{ backgroundColor: `black` }}
                  style={{position: 'absolute', right: '0', zIndex: '0'}}
                  fluid={data.imageOne.childImageSharp.fluid} alt="" />
                  <Col lg={12}
                  className="flex-left-bottom text-light p-5">
                      <h1 className="site-title text-lowercase mb-0 drop-shadow text-shadow">about</h1>
                  </Col>
                </Row>

                <Row className="min-h-100 p-0 m-0 bg-black">
                    <Col lg={10}
                    className="flex-left p-5">
                        <h5 className="font-weight-bold knockout">intro</h5>
                        <h1 className="section-title font-weight-bold my-auto py-3 knockout">I'm a passionate, multidisciplinary designer, developer, and writer. I build websites, design custom imagery, and I write copy for a wide variety of contexts. I create modern and engaging digital experiences that help people and companies grow.</h1>
                        <h5 className="font-weight-bold knockout">01</h5>
                    </Col>
                </Row>

                <Row className="min-h-100 p-0 m-0">
                  {/* <div className="absolute z-1 h-100 w-100 left" style={{background: 'rgba(0,0,0,0.4)'}}></div>
                  <Img 
                    className="img-full h-100" 
                    durationFadeIn={1500}
                    placeholderStyle={{ backgroundColor: `black` }}
                    style={{position: 'absolute', right: '0', zIndex: '0'}}
                    fluid={data.imageTwo.childImageSharp.fluid} alt="" /> */}
                    <Col lg={10}
                    className="flex-left p-5 relative knockout">
                      <h5 className="font-weight-bold mb-auto">coding + development</h5>
                      <h1 className="section-title font-weight-bold py-3">I build websites from scratch with HTML5, CSS3, SASS, PHP, Javascript, Bootstrap, Tailwind CSS, and Wordpress. I also build single page applications and static websites with React, Next.js, and Gatsby.</h1>
                      <Link to="/projects">
                        <Button variant="outline-dark" className="mt-2 mb-4">See more</Button>
                      </Link>
                      <h5 className="font-weight-bold mt-auto">02</h5>
                    </Col>
                </Row>
                
                <Row className="min-h-100 p-0 m-0 bg-black">
                    <Col lg={10}
                    className="flex-left p-5">
                        <h5 className="font-weight-bold mb-auto knockout">web + graphic design</h5>
                        <h1 className="section-title font-weight-bold py-3 knockout">I design UIs, imagery and custom assets for websites, social media and print using Photoshop, Canva, Crello, Lunapic and other tools. I make logos, posters, invitations, and source the perfect project-specific photos.</h1>
                        <Link to="/design">
                          <Button variant="outline-light" className="mt-2 mb-4">Learn more</Button>
                        </Link>
                        <h5 className="font-weight-bold mt-auto knockout">03</h5>
                    </Col>
                </Row>
                
                <Row className="min-h-100 p-0 m-0">
                    <Col lg={10}
                    className="flex-left p-5 knockout">
                        <h5 className="font-weight-bold mb-auto">copywriting + editing</h5>
                        <h1 className="section-title font-weight-bold py-3">I write and edit copy for a wide variety of contexts. I strive for fast moving, easy-to-read content with humour and originality, while specializing in UX, SEO, and editing for web presentation.</h1>
                        <a href="https://copy.andrewmasonmedia.com" target="_blank" rel="noreferrer">
                          <Button variant="outline-dark" className="mt-2 mb-4">Learn more</Button>
                        </a>
                        <h5 className="font-weight-bold mt-auto">04</h5>
                    </Col>
                </Row>

            </Layout>
        )
    }
