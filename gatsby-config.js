module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    desc: "A new blog"
  },
   // The gatsby proxy will proxy requests starting with `prefix` to
  // the path `${url}${prefix}`. Therefore any request that goes to
  // /localhost:9000 in development goes to http://localhost:9000 which is where
  // the development lambda serve is located by default.

  // When hosting lambda functions in production on netlify the functions will
  // be available under the same domain at `${your-domain.tld}/.netlify/functions`
  // and so CORS in no longer an issue
  proxy: {
    prefix: '/localhost:9000',
    url: 'http:/',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ]
};
