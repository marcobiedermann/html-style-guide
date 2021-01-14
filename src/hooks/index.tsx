/* eslint-disable import/prefer-default-export */

import { useStaticQuery, graphql } from 'gatsby';

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
}

export function useIndexPage(): IndexPageQuery {
  return useStaticQuery<IndexPageQuery>(graphql`
    query Markdown {
      allMarkdownRemark {
        distinct(field: frontmatter___categories)
        group(field: frontmatter___categories) {
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
    }
  `);
}
