import { PageProps } from 'gatsby';
import startCase from 'lodash/startCase';
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
import resources from '../constants/resources';
import tools from '../constants/tools';
import { useIndexPage } from '../hooks';

const IndexPage: FC<PageProps> = () => {
  const {
    allMarkdownRemark: { distinct, group },
    site: {
      siteMetadata: { description, github, title },
    },
  } = useIndexPage();

  return (
    <>
      <Header>
        <GitHub {...github} />
        <h1>{title}</h1>
        <img src="/images/html5.svg" alt="HTML5 Logo" width="160" height="183" />
      </Header>

      <Content>
        <Main>
          <Section>
            <h2>{title}</h2>
            <p>{description}</p>
          </Section>

          {group.map((section) => {
            const { edges, fieldValue } = section;

            return (
              <Section key={fieldValue} id={fieldValue}>
                <h2>{startCase(fieldValue)}</h2>
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
                  .reduce((accumulator, currentValue) => [
                    accumulator,
                    <hr key={currentValue.toString()} />,
                    currentValue,
                  ])}
              </Section>
            );
          })}

          <Section id="tools">
            <h2>Tools</h2>

            <ul>
              {tools.map((tool) => {
                const { name, url } = tool;

                return (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section id="resources">
            <h2>Resources</h2>

            <ul>
              {resources.map((resource) => {
                const { name, url } = resource;

                return (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Section>
        </Main>

        <Aside>
          <Navigation
            routes={[...distinct, 'tools', 'resources'].map((route) => ({
              name: startCase(route),
              path: `#${route}`,
            }))}
          />
        </Aside>
      </Content>

      <Footer>
        <Grid>
          <p>
            <a href={github.url} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </Grid>
      </Footer>
    </>
  );
};

export default IndexPage;
