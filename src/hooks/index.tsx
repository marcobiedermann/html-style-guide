import { graphql, useStaticQuery } from 'gatsby';

type Distinct = string;

interface Edge {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      bad?: {
        id: string;
        childMarkdownRemark: {
          html: string;
        };
      };
      good?: {
        id: string;
        childMarkdownRemark: {
          html: string;
        };
      };
    };
  };
}

interface Group {
  edges: Edge[];
  fieldValue: string;
}

interface IndexPageQuery {
  allMarkdownRemark: {
    distinct: Distinct[];
    group: Group[];
  };
  site: {
    siteMetadata: {
      description: string;
      github: {
        url: string;
      };
      title: string;
    };
  };
}

function useIndexPage(): IndexPageQuery {
  return useStaticQuery<IndexPageQuery>(graphql`
    query {
      allMarkdownRemark {
        distinct(field: { frontmatter: { categories: SELECT } })
        group(field: { frontmatter: { categories: SELECT } }) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                bad {
                  id
                  childMarkdownRemark {
                    html
                  }
                }
                good {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
          fieldValue
        }
      }
      site {
        siteMetadata {
          description
          github {
            url
          }
          title
        }
      }
    }
  `);
}

export default useIndexPage;
