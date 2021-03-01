import { PageProps } from 'gatsby';
import startCase from 'lodash/startCase';
import React, { FC } from 'react';
import Aside from '../components/Aside';
import Categories from '../components/Categories';
import Content from '../components/Content';
import Footer from '../components/Footer';
import GitHub from '../components/GitHub';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
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

          <Categories categories={group} />

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
