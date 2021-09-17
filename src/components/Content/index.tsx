import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './content.module.css';

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Content(props: ContentProps): JSX.Element {
  return <div className={styles.content} {...props} />;
}

export default Content;
