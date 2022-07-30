import type { GatsbyConfig } from 'gatsby';
import { resolve } from 'node:path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'HTML Style Guide',
    description: 'A style guide which helps you write better, performant, structured, scalable and maintainable HTML.',
    author: '@BiedermannMarco',
    github: {
      url: 'https://github.com/marcobiedermann/html-style-guide',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'HTML Style Guide',
        short_name: 'HTMLStyleGuide',
        start_url: '/',
        background_color: '#e34f26',
        theme_color: '#e34f26',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: resolve('src/data'),
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
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
  ],
};

export default config;
