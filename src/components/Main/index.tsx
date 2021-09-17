import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './main.module.css';

export interface MainProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Main(props: MainProps): JSX.Element {
  return <main className={styles.main} {...props} />;
}

export default Main;
