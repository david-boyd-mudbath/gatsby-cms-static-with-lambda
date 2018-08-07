import React from "react";
import Link from "gatsby-link";
import PostListing from "../components/Posts/PostListing";
import WeatherWidget from "../components/weather/WeatherWidget"

const IndexPage = ({ data }) => (
  <div>
    <WeatherWidget />
    <div>
      <h3>Posts</h3>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
    </div>
  </div>
);


export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;
