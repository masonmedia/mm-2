import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import { Row, Col, Card, CardColumns, Button } from 'react-bootstrap';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

export default function Design({data}) {
   
      const clImages = data.allCloudinaryMedia.nodes;
      const desc = data.allCloudinaryMedia.nodes.context;

    //   console.log(desc)


    const test2 = {
        "level1": {
            "name": "dave"
        },
        "level2": {
            "name": "jimmy",
            "location": [
                {
                "address": {
                    "street": "10 Robindale",
                    "city": "toronto",
                    "province": {
                        "central": "Ontario"
                        }
                    },
                },
                {
                "address": {
                    "street": "20 Suckit Ave",
                    "city": "Port Credit",
                    "province": {
                        "central": "Ontario"
                        }
                    },
                },
            ],
            "array2": [
                { 
                "one": "big",
                "two": "time",
                "three": "yaaa",
                }
            ],
        }
    }

    const user = {
        id: 339,
        name: 'Fred',
        age: 42,
        education: {
          degree: 'Masters'
        },
        location: {
            address: {
                street: "Robinale",
                number: "10",
                house: "yes"
            },
        }
      };
    //   const {education: {degree}} = user;
    //   const {location: {address}} = user;
    //   console.log(address.street); 

      const { allCloudinaryMedia: {nodes: [{ context: {custom: {alt, caption}} }] }} = data;
      console.log(alt, caption); 

    //   const {allCloudinaryMedia: {nodes: [{context: {...text}}]}} = data; 
    //   console.log(text);

    // check for existence of context object before trying to access
    // const context = image.context ? image.context : {};

    return (
        <Layout>
          <Fade bottom>
        <Row className="min-h-100 p-0 m-0">
          <Img 
          className="img-full" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', zIndex: '0'}}
          fluid={data.imageOne.childImageSharp.fluid} alt="" />
          <Col sm={12} lg={7}
          className="flex-left-bottom p-5">
            <Fade bottom>
              <h1 className="site-title text-lowercase mb-0">design</h1>
            </Fade>
          </Col>
        </Row>  
        </Fade> 

        <Row className="min-50 p-0 m-0 bg-black">
          <Col lg={12}
          className="flex-left p-5 knockout">
            <h5 className="font-weight-bold pb-5">intro</h5>
            <h1 className="section-title my-auto py-3">The gallery below showcases a variety of graphic design projects. Formats include concert posters, website assets, business cards, wedding invitations, and packaging & device mockups.</h1>
            <h5 className="font-weight-bold pt-5">01</h5>
          </Col>
        </Row>
   
        {/* gallery */}
        <Row className="min-h-100 p-5">
            <CardColumns>
            {clImages.map((image, i) => (
                <Card key={i} className="rounded-lg border-0 mb-3 relative" style={{filter: 'drop-shadow(10px 20px 10px grey)'}}>
                    <Card.Img variant="top" src={image.secure_url} />
                    <Card.Body>
                      <h5 className="h6 small text-muted text-uppercase">{image.created_at}</h5>
                    <Card.Title className="font-weight-bold">{image.context?.custom?.caption}</Card.Title>
                    <Card.Text>
                        {image.context?.custom?.alt}
                    </Card.Text>
                    <a href={image.tags} target="_blank" rel="noopener noreferrer">
                    <Button variant="dark">See more</Button>
                    </a>
                    {/* <Card.Text>
                        <small className="text-muted">{image.tags}</small>
                    </Card.Text> */}
                    </Card.Body>
                </Card>
                 ))}
            </CardColumns>
       
        </Row>
    </Layout>
    )
}

export const pageQuery = graphql`
query designQuery {
    imageOne: file(relativePath: { eq: "mm_phones_blocks.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allCloudinaryMedia {
        nodes {
          context {
            custom {
              alt
              caption
            }
          }
          secure_url
          tags
          created_at(formatString: "MMMM DD, YYYY")
        }
      }
  }

`