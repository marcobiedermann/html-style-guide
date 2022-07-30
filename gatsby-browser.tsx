/* eslint-disable import/prefer-default-export */

import { WrapPageElementBrowserArgs } from 'gatsby';
import 'prismjs/themes/prism.css';
import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/main.css';

function wrapPageElement({ element, props }: WrapPageElementBrowserArgs): JSX.Element {
  return <Layout {...props}>{element}</Layout>;
}

export { wrapPageElement };
