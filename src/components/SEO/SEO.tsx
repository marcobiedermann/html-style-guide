/* eslint-disable react/require-default-props */

import React from 'react';
import useSiteMetadata from '../../hooks/site-metadata';

interface SEOProps {
  author?: string;
  description?: string;
  title?: string;
}

function SEO(props: SEOProps): JSX.Element {
  const {
    site: {
      siteMetadata: { author: defaultAuthor, description: defaultDescription, title: defaultTitle },
    },
  } = useSiteMetadata();
  const { author = defaultAuthor, description = defaultDescription, title = defaultTitle } = props;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={author} />
    </>
  );
}

export type { SEOProps };
export default SEO;
