import { startCase } from 'lodash';
import React, { ReactNode } from 'react';
import useIndexPage from '../../hooks';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';
import GitHub from '../GitHub';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
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

export type { LayoutProps };
export default Layout;
