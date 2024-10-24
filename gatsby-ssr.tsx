/* eslint-disable import/prefer-default-export */

import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { Default } from './src/layouts';

function wrapPageElement({ element, props }: WrapPageElementBrowserArgs): JSX.Element {
  return <Default {...props}>{element}</Default>;
}

export { wrapPageElement };
