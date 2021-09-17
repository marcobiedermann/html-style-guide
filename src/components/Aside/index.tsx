import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './aside.module.css';

export interface AsideProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Aside(props: AsideProps): JSX.Element {
  return <aside className={styles.aside} {...props} />;
}

export default Aside;
