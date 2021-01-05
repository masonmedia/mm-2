import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
import { Row, Col, Button } from "react-bootstrap";
import Img from "gatsby-image";
import { Link } from "gatsby"
import {Fade, Zoom} from 'react-reveal'; 

export default function Home({data}) {
  return (
    <>
      <Layout>
        <Row className="min-h-100 p-0 m-0 relative bg-knockout">
          <Img 
          className="img-full h-100" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', top: '0', zIndex: '0'}}
          fluid={data.imageOne.childImageSharp.fluid} alt="" />
          {/* <img src="https://images.pexels.com/photos/963436/pexels-photo-963436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-full h-100 absolute left top z-0" style={{filter: 'brightness(.40)'}} /> */}
          {/* <img src="https://images.pexels.com/photos/3864610/pexels-photo-3864610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-full h-100 absolute left top z-0" style={{filter: 'brightness(.40)'}} /> */}
          {/* <img src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-full h-100 absolute left top z-0" style={{filter: 'brightness(.30)'}} /> */}
          <Col sm={12} lg={12}
          className="flex-center-bottom p-5">
            <Fade top>
              <h1 className="site-title sunset-text text-lowercase text-shadow px-3 pt-3">masonmedia</h1>
              <p className="h3 text-light mb-5" style={{lineHeight: '80%'}}>design. development. copywriting.</p>
            </Fade>
          </Col>
        </Row>
        
        {/* <Row className="min-h-100 p-0 m-0">
          <Col lg={12}
          className="flex-left p-5">
            <Fade bottom>
            <h5 className="font-weight-bold pb-5">intro</h5>
            <h1 className="section-text-bg my-auto py-3">
             <span><Slide down cascade>Hi, I'm Andrew.</Slide></span> <span className="d-table">I'm a passionate</span> <span className="text-dark-teal"><Fade left cascade>frontend developer,</Fade></span> 
             <span className="text-teal"><Fade top cascade>visual designer,</Fade></span> <span className="text-tan"><Fade bottom cascade>copywriter</Fade></span> <span className="text-orange"><Fade top>and musician.</Fade></span>
             </h1>
            <h5 className="font-weight-bold pt-5">01</h5>
            </Fade>
          </Col>
        </Row> */}
        
        <Row className="min-h-100 p-0 m-0 relative">
          <Col lg={12}
          className="flex-left p-5">
            <Fade bottom>
              <div className="absolute z-0 left top h-100 w-100 bg-texture"></div>
            <h5 className="font-weight-bold pb-5">intro</h5>
            <h1 className="section-text-bg my-auto py-3">Hi, I'm Andrew. <span className="d-table">I'm a passionate frontend developer, visual designer,copywriter and musician.</span>
             </h1>
            <h5 className="font-weight-bold pt-5">01</h5>
            </Fade>
          </Col>
        </Row>

        <Fade>
        <Row className="min-h-100 p-0 m-0 relative">
          {/* cloudinary */}
          {/* <img className="img-full absolute -left z-0" src="https://res.cloudinary.com/masonmedia/image/upload/e_gamma:0/v1607799000/sample.jpg" /> */}
          <Img 
          className="img-full h-100" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', top: '0', zIndex: '0'}}
          fluid={data.imageThree.childImageSharp.fluid} alt="" />
          <Col sm={12} lg={8} 
          className="flex-left text-lightorange text-shadow p-5">
            <Fade bottom>
            <h5 className="font-weight-bold pb-5">about me</h5>
            <h1 className="section-title font-weight-bold">I specialize in <span className="text-light">visual design,</span> building <span className="text-light">websites,</span> and <span className="text-light">ux copywriting</span>. I help build successful brands and create engaging digital experiences.</h1>
            <Link to="/about">
              <Button variant="light" className="mt-3">Read more</Button>
            </Link>
            <h5 className="font-weight-bold pt-5">02</h5>
            </Fade>
          </Col>
        </Row>
        </Fade>
        
        {/* development2 */}

        <Fade bottom>
        <Row className="min-h-100 p-0 m-0 relative">
          <Img 
          className="img-full h-100" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', top: '0', zIndex: '0'}}
          fluid={data.imageTwo.childImageSharp.fluid} alt="" />
          <Col sm={11} md={11} lg={7} 
          className="flex-left p-5 m-4 bg-black text-pink rounded-lg shadow-lg drop-shadow">
            <Fade bottom>
            <h5 className="font-weight-bold pb-5">development</h5>
            <h1 className="font-weight-bold">I design & build websites from scratch with HTML, CSS, SASS, PHP, Javascript, Bootstrap, Tailwind CSS and Wordpress, and I create single page applications and static sites with React, Gatsby, and Next.js.</h1>
            <Link to="/projects">
              <Button variant="outline-light" className="mt-3">Learn more</Button>
            </Link>
            <h5 className="font-weight-bold pt-5">03</h5>
            </Fade>
          </Col>
        </Row>
        </Fade>
        
        <Fade bottom>
        <Row className="min-h-100 p-0 m-0 relative">
          <Img 
          className="img-full h-100" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', top: '0', zIndex: '0'}}
          fluid={data.imageFive.childImageSharp.fluid} alt="" />
          <Col sm={12} lg={7} 
          className="flex-left text-light p-5">
            <Fade bottom>
            <h5 className="font-weight-bold pb-5">design</h5>
            <h1 className="font-weight-bold text-shadow drop-shadow">I create imagery for websites, social media, and print using Photoshop, Canva, Crello, Lunapic and other tools. I make logos, posters, banners, wedding invitations, business cards, and source the perfect project-specific photos.</h1>
            <Link to="/design">
              <Button variant="light" className="mt-3">Learn more</Button>
            </Link>
            <h5 className="font-weight-bold pt-5">04</h5>
            </Fade>
          </Col>
        </Row>
        </Fade>

        <Fade bottom>
        <Row className="min-h-100 p-0 m-0">
          <Img 
          className="img-full h-100" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', zIndex: '0'}}
          fluid={data.imageSix.childImageSharp.fluid} alt="" />
          <Col sm={12} md={7} lg={7} 
          className="flex-left p-5">
            <Fade bottom>
            <h5 className="font-weight-bold">writing</h5>
            <h1 className="font-weight-bold my-auto">I also write short and long form content on a wide variety of topics for websites, articles, reviews, blog posts, email marketing, and social media. I specialize in UX, SEO, and editing for web presentation.</h1>
            <h5 className="font-weight-bold">05</h5>
            </Fade>
          </Col>
        </Row>
        </Fade>
        
        <Fade bottom>
        <Row className="min-h-100 p-0 m-0 relative">
          <Img 
          className="img-full h-100" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', zIndex: '0'}}
          fluid={data.imageProjects.childImageSharp.fluid} alt="" />
          <Col sm={11} md={11} lg={7} 
          className="flex-left p-5 m-4 bg-light rounded-lg shadow-lg drop-shadow text-shadow">
            <Fade bottom>
              <h5 className="font-weight-bold pb-5">projects</h5>
              <h1 className="font-weight-bold">I've built websites, designed graphics & written content for a wide range of companies, small businesses, and individuals in spaces from blockchain to healthcare and the arts.</h1>
              <Link to="/projects">
                <Button variant="outline-dark" className="mt-2">Learn more</Button>
              </Link>
              <h5 className="font-weight-bold pt-5">06</h5>
              </Fade>
          </Col>
        </Row>
        </Fade>

        <Fade bottom>
        <Row className="min-h-100 p-0 m-0">
          <Col lg={12}
          className="flex-left p-5">
            <Fade bottom>
            <h5 className="font-weight-bold pb-5 knockout">cv</h5>
            <h1 className="font-weight-bold my-auto knockout">I have experience with a broad array of modern web development technologies and have worked in Agile team environments using Github and Bitbucket version control, communication and project management tools Slack, Skype, Zoom, Google Docs/Drive, Wrike, Cloudinary, and  I have excellent communication skills. I am a highly creative, lateral thinker who is committed to learning & growth. I am passionate, hard-working, and am focused on ethical design, data privacy, and making the web a better place.</h1>
            <h5 className="font-weight-bold pt-5 knockout">07</h5>
            </Fade>
          </Col>
        </Row>
        </Fade>

        <Fade bottom>
        <Row className="min-h-100 p-0 m-0">
          <Img 
          className="img-full h-100" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', zIndex: '0'}}
          fluid={data.imageStack.childImageSharp.fluid} alt="" />
          <Col lg={12}
          className="flex-center-bottom p-5">
            <Fade bottom>
            <h5 className="font-weight-bold text-muted bg-light">tech stack</h5>
            <h1 className="font-weight-bold bg-light">This site was built with React, Gatsby, React-Bootstrap, SASS, and React-Reveal. It also uses APIs from Github and Cloudinary.</h1>
            <a href="mailto:andrewmasonmedia@gmail.com">
                <Button variant="dark" className="mt-2">Get in touch</Button>
              </a>
            <h5 className="font-weight-bold pt-5 bg-light">08</h5>
            </Fade>
          </Col>
        </Row>
        </Fade>

      </Layout>
    </>
  ) 
}

// from https://www.sitepoint.com/automatically-optimize-responsive-images-in-gatsby/
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "mm_sunset_5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "22.png" }) {
      ...fluidImage
    }
    
    imageThree: file(relativePath: { eq: "mm_iphone_sunset3.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "mm_design_lookhere.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "29.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "30.png" }) {
      ...fluidImage
    }
    imageProjects: file(relativePath: { eq: "mm_projects.png" }) {
      ...fluidImage
    }
    imageStack: file(relativePath: { eq: "mm_phones_top.png" }) {
      ...fluidImage
    }
  }
  `