import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout';
import { Row, Col, Button } from 'react-bootstrap';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              user {
                avatarUrl
                repositories {
                  nodes {
                    description
                    forkCount
                    id
                    name
                    openGraphImageUrl
                    homepageUrl
                    updatedAt(formatString: "MMMM DD, YYYY")
                    pushedAt(formatString: "MMMM DD, YYYY")
                    url
                    primaryLanguage {
                      name 
                    }
                    languages {
                      nodes {
                        name
                      }
                    }
                    readme {
                      text
                    }
                    stargazers {
                      totalCount
                    }
                  }
                } 
              }
            }
          }
        }
        imageOne: file(relativePath: { eq: "mm_phones_bottom2.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `
  )
  
const repos = data.allGithubData.nodes[0].data.user.repositories.nodes
const avatar = data.allGithubData.nodes[0].data.user

  return (
    <Layout>
        <Row className="min-h-100 p-0 m-0 relative fade-up">
          <Img 
          className="img-full h-100" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', top: '0', zIndex: '0'}}
          fluid={data.imageOne.childImageSharp.fluid} alt="" />
          <Col lg={12}
          className="flex-center pb-5">
            <h1 className="site-title text-lowercase mb-0 fade-down">pro<span className="text-teal text-shadow">jects</span></h1>
          </Col>
        </Row>

        <Row className="min-h-75 p-0 m-0 bg-black">
        <Fade bottom>
          <Col lg={12}
          className="flex-left p-5 text-tan">
            <h5 className="font-weight-bold pb-5">intro</h5>
            <h1 className="section-title my-auto py-3">The gallery below showcases a variety of my website projects. All sites were built from scratch using a variety of coding languages and required frontend development, UI/UX design, graphic design, image sourcing, and copywriting or editing.</h1>
            <h5 className="font-weight-bold pt-5">01</h5>
          </Col>
          </Fade>
        </Row>
        

        {
          repos.map((repo, i) =>
            <Row id="projects" className="d-flex px-3 py-2 m-0" key={i}>
              <Col lg={6} className="flex-center py-3">
              <Fade bottom>
                  <img className="w-100" src={repo.openGraphImageUrl} />
                </Fade>
              </Col>
            <Col lg={6} className="flex-left p-5">  
            <Fade bottom>            
              <img className="border shadow img-thumbnail mb-3" style={{width: '90px', height: '90px', borderRadius: '100%'}} src={avatar.avatarUrl} />
             {/* nested loop to access the languages nodes array */}
                <div className="d-flex flex-row">
                  {repo.languages.nodes.map((lang, i) => (
                    <div key={i}>
                      <h6 className="text-muted pr-2">{lang.name}</h6>
                    </div>
                  ))}
                </div>
                {/*  */} 
              <h1 className="font-weight-bold mb-0">
                  {repo.name}
              </h1>
              <div className="display-2" style={{lineHeight: '70%', margin: '-4px'}}>―</div>
              <p>{repo.description}</p>
              <div className="d-flex">
                <a href={repo.homepageUrl} target="_blank" rel="noreferrer">
                  <Button variant="outline-dark" className="mr-2">
                    Live site
                  </Button>
                </a>
                <a href={repo.url} target="_blank" rel="noreferrer">
                  <Button variant="outline-dark">
                    Code
                  </Button>
                </a>   
              </div>
              </Fade>
            </Col>
          </Row>
        
          )
        }            
    </Layout>
  )
}

