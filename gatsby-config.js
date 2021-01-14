/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 // init. environment variables
 require('dotenv').config();
 const { githubApiQuery } = require('./github-api')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Mason Media',
    description: 'Mason Media is the web development studio of Toronto frontend developer, designer, and copywriter Andrew Mason. We make websites, create custom imagery, and write UX content.',
    robots: 'index,follow',
    url: 'https://andrewmasonmedia.com',
    type: 'website',
    image: 'mm_browser_social.png',
    imageAlt: 'An image of the Mason Media homepage featuring a sunset landscape photo and the site title.',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-transition-link`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages`,
        },
      },
      { resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `./src/images/`, 
        } 
      },
      {
        resolve:`gatsby-source-cloudinary`,
        options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        description: true,
        prefix: `samples` ,
        context: true,
        tags: true,
        maxResults: 50
        }
    },
      {
        resolve: `gatsby-source-github-api`,
        options: {
          url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint
    
          // token: required by the GitHub API
          token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    
          // GraphQLquery: defaults to a search query
          graphQLQuery: githubApiQuery,
    
          // variables: defaults to variables needed for a search query
          variables: {
            github_login: process.env.GITHUB_LOGIN
          }
        }
      },

  ],//end plugins
}
