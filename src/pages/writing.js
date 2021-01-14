import React from 'react'
import { useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import { Row, Col, Button } from 'react-bootstrap';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Writing() {
    const data = useStaticQuery(
        graphql`
          query copyQuery {
            imageOne: file(relativePath: { eq: "mm_writing2.png" }) {
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
                  style={{position: 'absolute', right: '0', zIndex: '0'}}
                  fluid={data.imageOne.childImageSharp.fluid} alt="" />
                  <Fade left>
                    <div className="absolute top left z-0 h-100 w-100" style={{background: 'rgba(0,0,0,0.2)'}}></div>
                  </Fade>
                  <Col lg={12}
                  className="flex-left p-5">
                    <Fade bottom>
                      <h1 className="site-title text-lowercase mb-0">wri<span className="text-teal text-shadow">ting</span></h1>
                    </Fade>
                  </Col>
                </Row>

                <Fade bottom>
                <Row className="min-h-100 p-0 m-0 bg-dark-teal text-tan">
                    <Col lg={10}
                    className="flex-left p-5">
                      <Fade bottom>
                        <h5 className="font-weight-bold pb-5">intro</h5>
                        <h1 className="section-title font-weight-bold my-auto py-3">I write and edit copy for a wide variety of contexts. I strive for fast moving, easy-to-read content with humour and originality, while specializing in UX, SEO, and editing for web presentation.</h1>
                        <h5 className="font-weight-bold pt-5">01</h5>
                        <Button variant="outline-dark" className="mt-2 mb-4" onClick={() => scrollTo('#copy')}>Content</Button>
                        </Fade>
                    </Col>
                </Row>
                </Fade>

                <Fade bottom>
                <Row id="copy" className="min-h-100 p-0 m-0 text-teal">
                    <Col lg={10}
                    className="flex-left p-5 relative">
                        <Fade bottom>
                        <h5 className="font-weight-bold pb-5">copywriting</h5>
                        <h1 className="section-title font-weight-bold py-3">I have broad experience with short and long form writing on a range of topics from music, to fashion, fitness, food/cooking, lifestyle, design, real estate, and business.</h1>
                        <Button variant="outline-dark" className="mt-2 mb-4" onClick={() => scrollTo('#content')}>Editing</Button>
                        <h5 className="font-weight-bold pt-5">02</h5>
                        </Fade>
                    </Col>
                </Row>
                </Fade>

                <Fade bottom>
                <Row id="content" className="min-h-100 p-0 m-0 bg-black text-orange">
                    <Col lg={10}
                    className="flex-left p-5">
                      <Fade bottom>
                        <h5 className="font-weight-bold pb-5">content</h5>
                        <h1 className="section-title font-weight-bold py-3">I create a range of different content types, from articles, to reviews, blog and social media posts, poster/flyer copy, bios, and album/track descriptions all written with a fast, fluid style.</h1>
                        <Button variant="outline-dark" className="mt-2 mb-4" onClick={() => scrollTo('#editing')}>See more</Button>
                        <h5 className="font-weight-bold pt-5">03</h5>
                        </Fade>
                    </Col>
                </Row>
                </Fade>
                
                <Fade bottom>
                <Row id="editing" className="min-h-100 p-0 m-0 text-teal">
                    <Col lg={10}
                    className="flex-left p-5 relative">
                        <Fade bottom>
                        <h5 className="font-weight-bold pb-5">editing</h5>
                        <h1 className="section-title font-weight-bold py-3">From grammar and spelling corrections, to improved style, UX, and SEO, I specialize in editing, parsing, and revitalizing existing written content for web presentation.</h1>
                        <Button variant="outline-dark" className="mt-2 mb-4" onClick={() => scrollTo('#seo')}>Editing</Button>
                        <h5 className="font-weight-bold pt-5">04</h5>
                        </Fade>
                    </Col>
                </Row>
                </Fade>
                
                <Fade bottom>
                <Row id="seo" className="min-h-100 p-0 m-0 text-dark-teal">
                    <Col lg={10}
                    className="flex-left p-5">
                      <Fade bottom>
                        <h5 className="font-weight-bold pb-5">seo</h5>
                        <h1 className="section-title font-weight-bold py-3">I bring SEO awareness to every aspect of content creation from keyword research, to meta descriptions, google schema data, and maximizing UX. Whether for a website, bio, or social media, SEO is always part of the equation.</h1>
                        <a href="https://copy.andrewmasonmedia.com" target="_blank" rel="noreferrer">
                          <Button variant="outline-dark" className="mt-2 mb-4">See more</Button>
                        </a>
                        <h5 className="font-weight-bold pt-5">05</h5>
                        </Fade>
                    </Col>
                </Row>
                </Fade>
            </Layout>
        )
    }
