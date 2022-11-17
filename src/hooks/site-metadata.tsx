import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetaData {
  site: {
    siteMetadata: {
      author: string;
      description: string;
      title: string;
    };
  };
}

function useSiteMetadata(): SiteMetaData {
  return useStaticQuery<SiteMetaData>(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);
}

export default useSiteMetadata;
