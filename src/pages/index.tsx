import { graphql, PageProps, useStaticQuery } from 'gatsby';
import _ from 'lodash';
import React, { FC } from 'react';
import Aside from '../components/Aside';
import Column from '../components/Column';
import Content from '../components/Content';
import Footer from '../components/Footer';
import GitHub from '../components/GitHub';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Row from '../components/Row';
import Section from '../components/Section';

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

const IndexPage: FC<PageProps> = () => {
  const {
    allMarkdownRemark: { distinct, group },
  } = useStaticQuery<IndexPageQuery>(graphql`
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

  return (
    <>
      <Header>
        <GitHub />
        <h1>HTML Style Guide</h1>
        <img src="/images/html5.svg" alt="HTML5 Logo" width="160" height="183" />
      </Header>

      <Content>
        <Main>
          <Section>
            <h2>HTML Style Guide</h2>
            <p>A style guide which helps you write better, performant, structured, scalable and maintainable HTML.</p>
          </Section>

          {group.map((group) => {
            const { edges, fieldValue } = group;

            return (
              <Section key={fieldValue} id={fieldValue}>
                <h2>{_.startCase(fieldValue)}</h2>
                {edges
                  .map((edge) => {
                    const {
                      node: {
                        id,
                        html,
                        frontmatter: { title, bad, good },
                      },
                    } = edge;

                    return (
                      <div key={id}>
                        <h3>{title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: html }} />

                        <Row>
                          {bad && (
                            <Column>
                              <h4>Bad</h4>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: bad.childMarkdownRemark.html,
                                }}
                              />
                            </Column>
                          )}

                          {good && (
                            <Column>
                              <h4>Good</h4>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: good.childMarkdownRemark.html,
                                }}
                              />
                            </Column>
                          )}
                        </Row>
                      </div>
                    );
                  })
                  .reduce((accumulator, currentValue, index) => [accumulator, <hr key={index} />, currentValue])}
              </Section>
            );
          })}

          <Section id="tools">
            <h2>Tools</h2>

            <ul>
              <li>
                <a href="https://validator.w3.org/" target="_blank" rel="noopener">
                  w3 Validator
                </a>
              </li>
            </ul>
          </Section>

          <Section id="resources">
            <h2>Resources</h2>

            <ul>
              <li>
                <a href="http://codeguide.co/" target="_blank" rel="noopener">
                  CodeGuide
                </a>
              </li>
              <li>
                <a href="https://google.github.io/styleguide/htmlcssguide.html" target="_blank" rel="noopener">
                  Google HTML & CSS Guide
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html5_syntax.asp" target="_blank" rel="noopener">
                  w3school
                </a>
              </li>
              <li>
                <a href="https://github.com/hail2u/html-best-practices" target="_blank" rel="noopener">
                  HTML Best Practices
                </a>
              </li>
            </ul>
          </Section>
        </Main>

        <Aside>
          <Navigation
            routes={[...distinct, 'tools', 'resources'].map((route) => ({
              name: _.startCase(route),
              path: `#${route}`,
            }))}
          />
        </Aside>
      </Content>

      <Footer>
        <Grid>
          <p>
            <a href="https://github.com/marcobiedermann/html-style-guide" target="_blank" rel="noopener">
              GitHub
            </a>
          </p>
        </Grid>
      </Footer>
    </>
  );
};

export default IndexPage;
