import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './grid.module.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Grid(props: GridProps): JSX.Element {
  return <div className={styles.grid} {...props} />;
}

export default Grid;
