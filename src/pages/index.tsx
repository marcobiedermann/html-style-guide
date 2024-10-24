import React from 'react';
import { Categories, Section, SEO } from '../components';
import resources from '../constants/resources';
import tools from '../constants/tools';
import useIndexPage from '../hooks';

function IndexPage(): JSX.Element {
  const {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { description, title },
    },
  } = useIndexPage();

  return (
    <>
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
    </>
  );
}

export function Head() {
  return <SEO />;
}

export default IndexPage;
