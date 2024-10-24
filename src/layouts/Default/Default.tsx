import { startCase } from 'lodash-es';
import React, { ReactNode } from 'react';
import { Aside, Content, Footer, GitHub, Grid, Header, Main, Navigation } from '../../components';
import useIndexPage from '../../hooks';

interface DefaultProps {
  children: ReactNode;
}

function Default(props: DefaultProps) {
  const { children } = props;

  const {
    allMarkdownRemark: { distinct },
    site: {
      siteMetadata: { github, title },
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
        <Main>{children}</Main>

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
}

export type { DefaultProps };
export default Default;
