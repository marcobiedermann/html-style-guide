import React, { HTMLAttributes, ReactNode } from 'react';
import { content } from './content.module.css';

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Content(props: ContentProps): JSX.Element {
  return <div className={content} {...props} />;
}

export default Content;
