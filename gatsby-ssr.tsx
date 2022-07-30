/* eslint-disable import/prefer-default-export */

import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Layout from './src/components/Layout';

function wrapPageElement({ element, props }: WrapPageElementBrowserArgs): JSX.Element {
  return <Layout {...props}>{element}</Layout>;
}

export { wrapPageElement };
