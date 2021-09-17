import React, { HTMLAttributes, ReactNode } from 'react';
import * as styles from './row.module.css';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Row(props: RowProps): JSX.Element {
  return <div className={styles.row} {...props} />;
}

export default Row;
