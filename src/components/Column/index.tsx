import React, { HTMLAttributes, ReactNode } from 'react';
import { column } from './column.module.css';

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Column(props: ColumnProps): JSX.Element {
  return <div className={column} {...props} />;
}

export default Column;
