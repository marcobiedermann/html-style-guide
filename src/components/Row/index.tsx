import React, { HTMLAttributes, ReactNode } from 'react';
import { row } from './row.module.css';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Row(props: RowProps): JSX.Element {
  return <div className={row} {...props} />;
}

export default Row;
