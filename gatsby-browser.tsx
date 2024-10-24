/* eslint-disable import/prefer-default-export */

import { WrapPageElementBrowserArgs } from 'gatsby';
import 'prismjs/themes/prism.css';
import React from 'react';
import { Default } from './src/layouts';
import './src/styles/main.css';

function wrapPageElement({ element, props }: WrapPageElementBrowserArgs): JSX.Element {
  return <Default {...props}>{element}</Default>;
}

export { wrapPageElement };
