module.exports = {
  siteMetadata: {
    title: 'HTML Style Guide',
    description: 'A style guide which helps you write better, performant, structured, scalable and maintainable HTML.',
    author: '@BiedermannMarco',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
          },
          {
            resolve: 'gatsby-remark-external-links',
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
  ],
};
